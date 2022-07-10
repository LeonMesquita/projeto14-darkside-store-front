import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import ProductCheckout from "../ProductCheckout";

export default function Checkout() {

    const [carregando, setCarregando] = useState(false);

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [CEP, setCEP] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [monthValidade, setMonthValidade] = useState("");
    const [yearValidade, setYearValidade] = useState("");
    const [CVV, setCVV] = useState("");
    const [installments, setInstallments] = useState("");

    //acho que essa variavel precisa ser global, mas vou criar aqui só pra teste
    const [cartList, setCartList] = useState([
        {
            _id: 1,
            title: "Camiseta Star Wars",
            price: "89,90",
            image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
            quantity: 1,
            size: "M"
        },
        {
            _id: 2,
            title: "Caneca Star Wars",
            price: "29,90",
            image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
            quantity: 2
        }
    ])

    function showProducts() {
        return (
            cartList.map((product, index) => <ProductCheckout key={index} product={product} />)
        );
    }

    //teste
    const total = 250;

    function createFormCheckout() {
        if (!carregando) {
            return (
                <>
                    <h1>Endereço da entrega</h1>

                    <Inputs>
                        <label for="street">Endereço: </label>
                        <input id="street" type="text" placeholder="Seu endereço..." value={street} onChange={e => setStreet(e.target.value)} required />
                    </Inputs>
                    <Inputs>
                        <label for="city">Cidade: </label>
                        <input id="city" type="text" placeholder="Sua cidade..." value={city} onChange={e => setCity(e.target.value)} required />
                    </Inputs>
                    <Inputs>
                        <label for="state">Estado: </label>
                        <select id="state" name="state" value={state} onChange={e => setState(e.target.value)}>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                        </select>
                    </Inputs>
                    <Inputs>
                        <label for="CEP">CEP: </label>
                        <input id="CEP" type="text" placeholder="Seu CEP..." value={CEP} onChange={e => setCEP(e.target.value)} required />
                    </Inputs>

                    <hr></hr>

                    <h1>Pagamento</h1>
                    <Inputs>
                        <label for="cardNumber">N° do cartão: </label>
                        <input id="cardNumber" type="text" placeholder="Número do cartão..." value={cardNumber} onChange={e => setCardNumber(e.target.value)} required />
                    </Inputs>
                    <Inputs>
                        <label for="name">Nome: </label>
                        <input id="name" type="text" placeholder="Nome do titular..." value={name} onChange={e => setName(e.target.value)} required />
                    </Inputs>
                    <Inputs className="validade">
                        <label>Validade: </label>
                        <select id="monthValidade" name="monthValidade" value={monthValidade} onChange={e => setMonthValidade(e.target.value)}>
                            <option value="01">Janeiro</option>
                            <option value="02">Fevereiro</option>
                            <option value="03">Março</option>
                            <option value="04">Abril</option>
                            <option value="05">Maio</option>
                            <option value="06">Junho</option>
                            <option value="07">Julho</option>
                            <option value="08">Agosto</option>
                            <option value="09">Setembro</option>
                            <option value="10">Outubro</option>
                            <option value="11">Novembro</option>
                            <option value="12">Dezembro</option>
                        </select>
                        <select id="yearValidade" name="yearValidade" value={yearValidade} onChange={e => setYearValidade(e.target.value)}>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                    </Inputs>
                    <Inputs>
                        <label for="CVV">CVV: </label>
                        <input id="CVV" type="text" placeholder="Código de segurança..." value={CVV} onChange={e => setCVV(e.target.value)} required />
                    </Inputs>
                    <Inputs>
                        <label for="installments">Parcelas: </label>
                        <select id="installments" name="installments" value={installments} onChange={e => setInstallments(e.target.value)}>
                            <option value="1x">1x de {total.toFixed(2)}</option>
                            <option value="2x">2x de {(total/2).toFixed(2)}</option>
                            <option value="3x">3x de {(total/3).toFixed(2)}</option>
                            <option value="4x">4x de {(total/4).toFixed(2)}</option>
                            <option value="5x">5x de {(total/5).toFixed(2)}</option>
                            <option value="6x">6x de {(total/6).toFixed(2)}</option>
                        </select>
                    </Inputs>
                </>
            );
        }
    }

    const products = showProducts();
    const formCheckout = createFormCheckout();

    return (
        <Container>
            <Summary>
                <h1>Produtos selecionados</h1>
                {products}
            </Summary>
            <FormCheckout>
                <form>
                    {formCheckout}
                </form>
            </FormCheckout>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 10px;
    width: 550px;

    h1 {
        font-size: 30px;
        color: #E19F41;
        margin-bottom: 20px;
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`

const Summary = styled.div`

`

const Inputs = styled.div`
    display: flex;
    label {
        width: 170px;
        text-align: end;
        padding-right: 15px;
        padding-top: 5px;
    }
`

const FormCheckout = styled.div`
    border: 1px solid blue;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px 10px 10px;
    border-radius: 3px;

    label {
        font-weight: bold;
        color: #051731;
        font-size: 16px;
    }

    input, select {
        border: 1px solid #051731;
        border-radius: 2px;
        width: 100%;
        height: 26px;
        margin-bottom: 10px;
        background-color: inherit;
        text-indent: 5px;
        color: #051731;
        font-size: 14px;

        &::placeholder {
            font-size: 12px;
        }
    }

    .validade {
        select {
            width: 180px;
            margin-right: 10px;

            &:last-child {
                width: 120px;
                margin-right: 0;
            }
        }
    }
`