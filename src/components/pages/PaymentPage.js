import {Inputs, FormCheckout, Validate} from '../FormStyles';
import { useState } from 'react';
export default function PaymentPage(){
    const [cardNumber, setCardNumber] = useState("");
    const [name, setName] = useState("");
    const [monthValidade, setMonthValidade] = useState("");
    const [yearValidade, setYearValidade] = useState("");
    const [CVV, setCVV] = useState("");
    const [installments, setInstallments] = useState("");
    const total = 500.6;
    return(
        <FormCheckout>
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
                    <option value="1x">1x de {total}</option>
                    <option value="2x">2x de {(total / 2).toFixed(2)}</option>
                    <option value="3x">3x de {(total / 3).toFixed(2)}</option>
                    <option value="4x">4x de {(total / 4).toFixed(2)}</option>
                    <option value="5x">5x de {(total / 5).toFixed(2)}</option>
                    <option value="6x">6x de {(total / 6).toFixed(2)}</option>
                </select>
            </Inputs>
            <button type="submit">Confirmar Pagamento</button>
        </FormCheckout>
    );
}