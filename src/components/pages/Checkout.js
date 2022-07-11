import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import ProductCheckout from "../ProductCheckout";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ConfirmationDialog from "../ConfirmationDialog";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';


export default function Checkout() {

    const { apiUrl, authorization, orderBody, setTotalOfProducts } = useContext(Context);



    const [cartList, setCartList] = useState([...orderBody.products]);
    let defaultAddress = {
        rua: 'Rua Don Pedro II',
        bairro: 'Bairro Bandeirantes',
        numero: 35,
        cidade: 'Fortaleza',
        estado: 'Ceará'
    }

    const defaultPayment = 'Boleto';


    const navigate = useNavigate();

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

    async function finalizeOrder(event) {
        event.preventDefault();
        console.log('entrou')
        const order = {
            ...orderBody,
            date:  dayjs().format("DD/MM/YYYY"),
            address: defaultAddress,
            payment: defaultPayment
        }
        try{
            await axios.post(`${apiUrl}/order`, order, authorization);
            await axios.delete(`${apiUrl}/cart`, authorization);
            setTotalOfProducts(0);
            navigate('/home');
        }catch{
            alert('Não foi possível concluir o pedido!');

        }
    }

    async function cancelOrder(){
        
    }



    const products = showProducts();

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

            <Total>
                <div>
                    <h5>Frete</h5>
                    <h5>Frete Grátis</h5>
                </div>
                <hr></hr>
                <div>
                    <h6>TOTAL</h6>
                    <h6>R${orderBody.totalPrice.replace(".", ",")}</h6>
                </div>
            </Total>

            <FooterCheckout>
                <button onClick={() => navigate('/address')} className='finish-button infos'>
                    <h6>Selecionar endereço</h6>
                    <ion-icon name="home-outline"></ion-icon>
                </button>
                <button onClick={() => navigate('/payment')} className='finish-button infos'>
                    <h6>Selecionar pagamento</h6>
                    <ion-icon name="card-outline"></ion-icon>
                </button>
                <button className='goback-button'>Cancelar compra</button>
                <button className='finish-button'>Efetuar pagamento</button>
            </FooterCheckout>
        </>
    );
}



const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 20px 10px;
    width: 100%;
    height: 100vh;
    border-bottom: solid 1px #F9CA6F;
    margin-bottom: 140px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

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

    h1 {
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

const Total = styled.div`
    width: 100%;
    background-color: rgba(255,255,255,1);
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    padding: 6px;
    box-shadow: 10px 5px 20px 8px rgba(0,0,0,0.3);
    font-family: 'Lexend Mega';
    position: fixed;
    bottom: 150px;
    padding: 15px;
    z-index: 1;
    

    h5 {
        font-size: 11px; 
        margin-bottom: -5px;
    }

    >div {
        display: flex;
        justify-content: space-between;
    }
`

const FooterCheckout = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 550px;
    padding-top: 15px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-image: linear-gradient(to right, #031027, #08203D, #031027);

    button {
        width: calc(50% - 20px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .infos {
        background-color: #ffffff;
        margin-bottom: 15px;    

        ion-icon {
            font-size: 38px;
            padding: 0 10px 0 5px;
        }
    }

    @media(max-width: 550px){
        width: 100%;
    }
`
