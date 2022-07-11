import styled from "styled-components";
import ProductHist from "./ProductHist";
import { useRef } from "react";
import {useLocation, useNavigate} from 'react-router-dom';



export default function Request({ request }) {

    /* formato do objeto request
        {
            id: "1",
            date: "12/04/2022",
            products: [
                {
                    title: "Camiseta Star Wars",
                    price: "89,90",
                    image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
                    quantity: 1,
                    size: "M"
                },
                {
                    title: "Caneca Star Wars",
                    price: "89,90",
                    image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
                    quantity: 2
                }
            ]
        }
    */
        const location = useLocation();
       // const registerType = location.state.registerType;
       //navigate('/add-register', {state:{registerType: 'entry'}})}
    const carousel = useRef(null);

    function showProducts() {
        return (
            request.products.map((product, index) => <ProductHist key={index} product={product} carousel={carousel} />)
        );
    }

    function calculateTotal() {
        let total = 0;
        request.products.forEach((product) => {
            const priceInNumber = parseFloat(product.price.replace(',', '.'));
            total += priceInNumber * product.quantity;
        })

        return total.toFixed(2).replace(".", ",");
    }

    function handleLeftClick(e) {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    function handleRightClick(e) {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    const products = showProducts();
    const total = calculateTotal();

    return (
        <Container>
            <ContainerProducts>
                <Carousel ref={carousel}>
                    <Products>
                        {products}
                    </Products>
                </Carousel>
                <Buttons>
                        <button onClick={handleLeftClick}><ion-icon name="chevron-back-circle"></ion-icon></button>
                        <button onClick={handleRightClick}><ion-icon name="chevron-forward-circle"></ion-icon></button>
                </Buttons>
            </ContainerProducts>
            <Summary>
                <h2>Resumo da compra</h2>
                <div>
                    <h3>Pedido: <strong>{request.id}</strong></h3>
                    <h3>Data: <strong>{request.date}</strong></h3>
                    <h3>TOTAL: <strong>R${total}</strong></h3>
                </div>
            </Summary>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgba(215, 215, 215, 0.1);
    margin: 0 auto 25px auto;
    border-radius: 3px;
    padding: 20px 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    width: 100%;
`

const ContainerProducts = styled.div`
    width: 55%;
    border-right: 2px solid #A7A7A7;
    padding-right: 10px;
    position: relative;
`

const Carousel = styled.div`
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        display: none;
    }
`

const Products = styled.div`
    display: flex;
    align-items: flex-start;
    width: 170px;
`

const Summary = styled.div`
    width: 45%;
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: center;

    h2 {
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 30px;
        color: #E19F41;
        text-align: center;
    }

    h3 {
        font-size: 11px;
        line-height: 15px;
        margin-bottom: 7px;
    }

    strong {
        font-weight: bold;
    }
`

const Buttons = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    position: absolute;
    top: 30px;

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 32px;
        color: #ffffff;
        border-radius: 50%;
        filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.6));
    }
`