import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import Context from '../../Context.js';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import NavBar from '../NavBar.js';
import LoaderSpinner from '../LoaderSpinner.js';
import Footer from '../Footer.js';

export default function CartPage(){
    const [cartList, setCartList] = useState([]);
    const { apiUrl, authorization, setOrderBody, user } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(async () => {
        try {
            const promise = await axios.get(`${apiUrl}/cart`, authorization);
            setCartList(promise.data.products);
            calcTotalPrice(promise.data.products);
            setIsLoading(false);
        } catch (error) {
           navigate('/');
        }

    }, []);


    function calcTotalPrice(products){
        let price = 0;
        products.map((product) => {
            price += Number(product.totalPrice)});

        setTotalPrice(price.toFixed(2));

    }

    async function finishOrder(){
        setOrderBody({
            name: user.name,
            email: user.email,
            totalPrice,
            products: cartList
        });
        navigate('/checkout');

    }


    return(
        isLoading ? <LoaderSpinner loaderType='oval'/> :
        <>
            <NavBar />
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
        <h6 className='price-text'>Total: R${totalPrice}</h6>
            <Footer>
                <button onClick={() => navigate('/home')} className='goback-button'>Escolher mais produtos</button>
                <button onClick={() => finishOrder()} className='finish-button'>Finalizar compra</button>
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

    &::-webkit-scrollbar {
        display: none;
    }

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

    @media(max-width: 400px){
        h3{
            font-size: 10px;
        }
    }

    @media(max-width: 375px){
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
    margin-top: 20px;
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

