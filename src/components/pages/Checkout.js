import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import ProductCheckout from "../ProductCheckout";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ConfirmationDialog from "../ConfirmationDialog";
import { useNavigate } from "react-router-dom";

export default function Checkout() {

    const { apiUrl, authorization, orderBody } = useContext(Context);



    const [cartList, setCartList] = useState([...orderBody.products]);


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

    function finalizeOrder(event) {
        event.preventDefault();
        console.log("terminarr");
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
                <button onClick={() => navigate('/address')}  className='goback-button'>Selecionar endereço</button>
                <button onClick={() => navigate('/payment')} className='finish-button'>Selecionar pagamento</button>
                <button  className='goback-button'>Cancelar compra</button>
                <button  className='finish-button'>Efetuar pagamento</button>
            </Footer>
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
