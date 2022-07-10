import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import Context from '../../Context.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CartPage(){
    const [cartList, setCartList] = useState([]);
    const { apiUrl, totalOfProducts, setTotalOfProducts, authorization } = useContext(Context);
    const navigate = useNavigate();

    useEffect(async () => {
        try {
            const promise = await axios.get(`${apiUrl}/cart`);
            setCartList(promise.data);
        } catch (error) {
            console.log(error);
        }

    }, []);


    return(
        <>
                    <Cart>
            <div className='title'>
                <div className='available-area'>
                    <ion-icon name="cart-outline"></ion-icon>
                    <p>Seu carrinho de compras</p>                    
                </div>

            </div>
            <div className='available-area'>

                {cartList.length === 0 ? null :

                cartList.map((item) =>
                <Product>
                    <div>
                        <img src={item.image} alt=''/>
                        <h3>{item.title}</h3>                        
                    </div>
                    <h2>{item.itemQuantity}</h2>

                    <h2>R${item.price}</h2>
                    <h2>R${item.totalPrice}</h2>
                </Product>
                )

                }
            </div>
        </Cart>
        

        <div className='available-area'>
        <h6 className='price-text'>Total: R$600,00</h6>
            <Footer>
                <button onClick={() => navigate('/home')} className='goback-button'>Escolher mais produtos</button>
                <button className='finish-button'>Finalizar compra</button>
            </Footer>
        </div>
        </>
    );
}

const Cart = styled.div`
width: 100%;
height: 100vh;
max-height: 70vh;
border-bottom: solid 1px #F9CA6F;
overflow-y: scroll;
padding-bottom: 20px;

    .title{
        border-bottom: solid 1px #F9CA6F;
        height: 80px;
    }

    .title div{
        display: flex;
        align-items: center;
        height: 100%;
        margin: auto;
    }

    .available-area{
        margin: auto;
    }

    ion-icon{
        color: #F9D978;
        font-size: 38px;
        margin-left: 10px;
        margin-right: 20px;
    }
    p{
        font-family: 'Lexend Mega';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 11px;
        letter-spacing: -0.16em;
        color: #E19F41;
    }

    h2, h3{
        font-family: 'Lexend Mega';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #ECECEC;
    }

    @media(max-width: 450px){
        h3{
            font-size: 8px;
        }
    }

    @media(max-width: 385px){
        h2{
            font-size: 8px;
        }
    }

`


const Product = styled.div`
    background: #03223F;
    width: 95%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    border-radius: 15px;
    margin-top: 30px;
    padding-right: 20px;

    img{
        border-radius: 15px;
        height: 100%;
        width: 80px;
        margin-right: 8px;
    }

    div{
        height: 100%;
        display: flex;
        align-items: center;
        width: 40%;
        margin-right: 20px;
    }


`

const Footer = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 550px;
    justify-content: space-evenly;

    @media(max-width: 550px){
        width: 100%;
    }

`