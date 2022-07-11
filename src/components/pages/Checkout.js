import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import ProductCheckout from "../ProductCheckout";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Checkout() {

    const { apiUrl, authorization, orderBody } = useContext(Context);

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

    const [cartList, setCartList] = useState([...orderBody.products]);
    

    console.log(orderBody);

    /*
        date: "10/07/2022"
        email: "leo@gmail.com"
        name: "leo"
        products: (3) [{…}, {…}, {…}]
        totalPrice: "707.00"
    */

        /*
            products:
            {
                image: "https://img.elo7.com.br/product/original/2C68ACB/camiseta-star-wars-logo-arte-camisa-star-wars-imagem.jpg"
                itemQuantity: 2
                price: 38.9
                productId: "62c87eeddaa7673f12466da0"
                title: "Camiseta Star Wars Logo"
                totalPrice: 77.8
            }
        */



    function showProducts() {
        return (
            cartList.map((product, index) => <ProductCheckout key={index} product={product} />)
        );
    }

    function finalizeOrder(event) {
        event.preventDefault();
        console.log("terminarr");
    }

    const products = showProducts();
   // const formCheckout = createFormCheckout();
   //
    return (
        <>
            <NavBar />
           
                <Container>
                     <div className="available-area">
                    <Summary>
                        <h1>Produtos selecionados</h1>
                        {products}


                    </Summary>
      </div>
                </Container>  

            <PayButton>
                <h5>Selecionar endereço de entrega</h5>
            </PayButton>   
            <PayButton>
                <h5>Selecionar forma de pagamento</h5>    
            </PayButton>           
      

            <Shipping>
                <div className="available-area">
                        <h5>Frete:</h5>
                        <h5>Frete Grátis</h5>
                </div>

            </Shipping>
            <Shipping>
            <div className="available-area">
            <h5>Total da compra:</h5>
                <h5>R${orderBody.totalPrice.replace(".", ",")}</h5>
                </div>
            </Shipping>
            <Footer>
                <button  className='goback-button'>Cancelar compra</button>
                <button  className='finish-button'>Efetuar pagamento</button>
            </Footer>
        </>
    );
}

/*
                <FormCheckout>
                    <form onSubmit={finalizeOrder}>
                        {formCheckout}
                    </form>
                </FormCheckout>
*/

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 10px;
    width: 100%;
    height: 100vh;
    max-height: 55vh;
    border-bottom: solid 1px #F9CA6F;
    margin-bottom: 10px;
    overflow-y: scroll;

    .available-area{
        height: 100%;
        display: flex;
        flex-direction: column;  
        margin: auto;
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`

const Summary = styled.div`
    margin-bottom: 40px;

    >h1 {
        font-size: 22px;
        color: #E19F41;
        margin-bottom: 20px;
        font-family: 'Lexend Mega';
    }
`

const Shipping = styled.div`
    width: 100%;
   
   
    background-color: #FCCB6F;
    color: #051731;
    font-weight: bold;
    font-size: 16px;
    padding: 6px; 
    margin-bottom: 8px; 
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3); 
    font-family: 'Lexend Mega';

    div{
        
        display: flex;
        justify-content: space-between;
        margin: auto;
    }
`



const Inputs = styled.div`
    display: flex;
    label {
        width: 180px;
        text-align: end;
        padding-right: 15px;
        padding-top: 5px;
    }
`

const FormCheckout = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px 10px 10px;
    border-radius: 3px;
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3);

    h1 {
        font-size: 22px;
        color: #051731;
        margin-bottom: 28px;
        font-weight: bold;
        font-family: 'Lexend Mega';
    }

    label {
        font-weight: bold;
        color: #051731;
        font-size: 11px;
        font-family: 'Lexend Mega';
        margin-top: 3px;
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
        font-size: 12px;
        font-family: 'Lexend Mega';

        &::placeholder {
            font-size: 11px;
            font-family: 'Lexend Mega';
        }
    }

    form {
        width: 100%;
    }

    button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        width: 260px;
        height: 46px;
        margin: 30px auto 10px auto;
        padding: 10px;
        background-color: #FCCB6F;
        border-radius: 5px;
        color: #051731;
        font-weight: bold;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        font-family: 'Lexend Mega';

        &:hover {
            color: #2a7b9e;
        }
    }
`

const Validate = styled.div`
    display: flex;
    width: 100%;
    select {
        width: 70%;
        margin-right: 10px;

        &:last-child {
            width: 30%;
            margin-right: 0;
        }
    }
`


const PayButton = styled.button`
    background: #FCCB6F;
    width: 60%;
    height: 40px;
    max-width: 400px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-bottom: 20px;
    color: #051731;
    font-size: 15px;
    font-weight: 700;
    
`


/*
    function createFormCheckout() {
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
                <Inputs>
                    <label>Validade: </label>
                    <Validate>
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
                    </Validate>
                </Inputs>
                <Inputs>
                    <label for="CVV">CVV: </label>
                    <input id="CVV" type="text" placeholder="Código de segurança..." value={CVV} onChange={e => setCVV(e.target.value)} required />
                </Inputs>
                <Inputs>
                    <label for="installments">Parcelas: </label>
                    <select id="installments" name="installments" value={installments} onChange={e => setInstallments(e.target.value)}>
                        <option value="1x">1x de {total.replace(".", ",")}</option>
                        <option value="2x">2x de {(total / 2).toFixed(2).replace(".", ",")}</option>
                        <option value="3x">3x de {(total / 3).toFixed(2).replace(".", ",")}</option>
                        <option value="4x">4x de {(total / 4).toFixed(2).replace(".", ",")}</option>
                        <option value="5x">5x de {(total / 5).toFixed(2).replace(".", ",")}</option>
                        <option value="6x">6x de {(total / 6).toFixed(2).replace(".", ",")}</option>
                    </select>
                </Inputs>
                <button type="submit">Finalizar Pedido</button>
            </>
        );
    }


*/