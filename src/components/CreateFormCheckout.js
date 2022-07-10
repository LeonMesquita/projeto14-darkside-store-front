import { useState } from "react";
import styled from "styled-components";

export default function CreateFormCheckout({ adress, setAdress, city, setCity, state, setState, CEP, setCEP, installments, setInstallments, total }) {

    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [monthValidade, setMonthValidade] = useState("");
    const [yearValidade, setYearValidade] = useState("");
    const [CVV, setCVV] = useState("");

    return (
        <>
            <h1>Endereço da entrega</h1>

            <Inputs>
                <label for="adress">Endereço: </label>
                <input id="adress" type="text" placeholder="Seu endereço..." value={adress} onChange={e => setAdress(e.target.value)} required />
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
                    <option value="1">1x de {total.replace(".", ",")}</option>
                    <option value="2">2x de {(total / 2).toFixed(2).replace(".", ",")}</option>
                    <option value="3">3x de {(total / 3).toFixed(2).replace(".", ",")}</option>
                    <option value="4">4x de {(total / 4).toFixed(2).replace(".", ",")}</option>
                    <option value="5">5x de {(total / 5).toFixed(2).replace(".", ",")}</option>
                    <option value="6">6x de {(total / 6).toFixed(2).replace(".", ",")}</option>
                </select>
            </Inputs>
            <button type="submit">Finalizar Pedido</button>
        </>
    );
}

const Inputs = styled.div`
    display: flex;
    label {
        width: 180px;
        text-align: end;
        padding-right: 15px;
        padding-top: 5px;
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