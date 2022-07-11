import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import ProductCheckout from "../ProductCheckout";
import NavBar from "../NavBar";
import Footer from "../Footer";
import ConfirmationDialog from "../ConfirmationDialog";
import ContextCheckout from "../../ContextCheckout";
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import sadYoda from '../../images/sad.png';



export default function Checkout() {

    const { apiUrl, authorization, orderBody, setTotalOfProducts } = useContext(Context);

    const [adress, setAdress] = useState("Rua Don Pedro II, 35");
    const [city, setCity] = useState("Fortaleza");
    const [state, setState] = useState("Ceará");
    const [CEP, setCEP] = useState("60767-305");
    const [installments, setInstallments] = useState("1");
    const [total, setTotal] = useState(orderBody.totalPrice);
    const [dialog, setDialog] = useState(false);
    const dialogMessage = "Tem certeza de que deseja cancelar a compra?"

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

    async function finalizeOrder(event) {
        event.preventDefault();

        console.log('entrou')
        const order = {
            ...orderBody,
            date:  dayjs().format("DD/MM/YYYY")
        }

        const finish = window.confirm(`            Confirme os dados para finalizar a compra:
            
            Endereço da entrega:
            ${adress}
            ${city}, ${state} 
            ${CEP}
            Pagamento: ${installments}x de R$${(total/Number(installments)).toFixed(2).replace(".",",")}
        `);

        if(finish) {
            try {
                await axios.post(`${apiUrl}/order`, order, authorization);
                await axios.delete(`${apiUrl}/cart`, authorization);
                setTotalOfProducts(0);
                navigate('/home');
            } catch{
                alert('Não foi possível concluir o pedido!');
            }
        }
    }

    async function cancelOrder(){
        navigate("/home");
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


            <ContextCheckout.Provider value={{ adress, setAdress, city, setCity, state, setState, CEP, setCEP, installments, setInstallments, total }}>
                <FooterCheckout>
                    <button onClick={() => navigate('/address')} className='finish-button infos'>
                        <h6>Selecionar endereço</h6>
                        <ion-icon name="home-outline"></ion-icon>
                    </button>
                    <button onClick={() => navigate('/payment')} className='finish-button infos'>
                        <h6>Selecionar pagamento</h6>
                        <ion-icon name="card-outline"></ion-icon>
                    </button>
                    <button onClick={() => setDialog(true)} className='goback-button'>Cancelar compra</button>
                    <button onClick={finalizeOrder} className='finish-button'>Efetuar pagamento</button>
                </FooterCheckout>
            </ContextCheckout.Provider>
            {dialog ? <ConfirmationDialog message={dialogMessage} image={sadYoda}
            onclickNo={() => setDialog(false)} onclickYes={() => navigate('/home')}
            /> : null}
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
    max-height: 63vh;
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
        width: 70%;
        max-width: 600px;
        margin: auto;
        display: flex;
        justify-content: space-between;
    }
`
//    background-image: linear-gradient(to right, #031027, #08203D, #031027);

const FooterCheckout = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 650px;
    padding-top: 15px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    button {
        width: calc(50% - 20px);
        max-width: 300px;
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

    @media(max-width: 650px){
        width: 100%;
    }
`
