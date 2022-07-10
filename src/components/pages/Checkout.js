import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import ProductCheckout from "../ProductCheckout";
import NavBar from "../NavBar";
import CreateFormCheckout from "../CreateFormCheckout";

export default function Checkout() {

    const { apiUrl, authorization } = useContext(Context);

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
            title: "Caneca Star Warsssssssssssssssssssssssssss",
            price: "29,90",
            image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
            quantity: 2
        }
    ]);

    useEffect(async () => {
        try {
            const promise = await axios.get(`${apiUrl}/cart`, authorization);
            setCartList(promise.data.products);
        } catch (error) {
            console.log(error);
        }

    }, []);

    const total = calculateTotal();

    const [adress, setAdress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [CEP, setCEP] = useState("");

    const [installments, setInstallments] = useState(`1x de ${total.replace(".",",")}`);

    function showProducts() {
        return (
            cartList.map((product, index) => <ProductCheckout key={index} product={product} />)
        );
    }

    function calculateTotal() {
        let total = 0;
        cartList.forEach((product) => {
            const priceInNumber = parseFloat(product.price.replace(',', '.'));
            total += priceInNumber * product.quantity;
        })

        return total.toFixed(2);
    }

    //deixa assim com esses espaços ai pra ficar bonitinho!
    function finalizeOrder(event) {
        event.preventDefault();
        const finish = window.confirm(`            Confirme os dados para finalizar a compra:
            
            Endereço da entrega:
            ${adress}
            ${city}, ${state} 
            ${CEP}

            Pagamento: ${installments}x de R$${(total/Number(installments)).toFixed(2).replace(".",",")}
        `);

        if(finish) {
            //adicionar ao histórico
            //limpar carrinho
            //voltar para home
            //salvar no historico
        }
    }

    const products = showProducts();

    return (
        <>
            <NavBar />
            <Container>
                <Summary>
                    <h1>Produtos selecionados</h1>
                    {products}
                </Summary>
                <FormCheckout>
                    <form onSubmit={finalizeOrder}>
                        <CreateFormCheckout adress={adress} setAdress={setAdress} city={city} setCity={setCity} state={state} setState={setState} CEP={CEP} setCEP={setCEP} installments={installments} setInstallments={setInstallments} total={total} />
                    </form>
                </FormCheckout>
            </Container>
            <Total>
                <div>
                    <h5>Frete</h5>
                    <h5>Frete Grátis</h5>
                </div>
                <hr></hr>
                <div>
                    <h6>TOTAL</h6>
                    <h6>R${total.replace(".", ",")}</h6>
                </div>
            </Total>
        </>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 10px;
    width: 550px;

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

const FormCheckout = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px 10px 10px;
    border-radius: 3px;
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3);
    margin-bottom: 80px;

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

const Total = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,1);
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    padding: 6px;
    box-shadow: 20px 5px 20px 8px rgba(0,0,0,0.3);
    font-family: 'Lexend Mega';
    position: fixed;
    bottom: 0;
    padding: 15px;

    h5 {
        font-size: 11px; 
        margin-bottom: -5px;
    }

    >div {
        display: flex;
        justify-content: space-between;
    }
`