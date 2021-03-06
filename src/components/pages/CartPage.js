import styled from 'styled-components';
import { useState, useContext, useEffect } from "react";
import Context from '../../Context.js';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';
import NavBar from '../NavBar.js';
import LoaderSpinner from '../LoaderSpinner.js';
import Footer from '../Footer.js';
import ConfirmationDialog from "../ConfirmationDialog";
import sadYoda from '../../images/sad_yoda.gif';



export default function CartPage(){
    const [cartList, setCartList] = useState([]);
    const { apiUrl, authorization, setOrderBody, user, setTotalOfProducts } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [dialog, setDialog] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);



    useEffect(async () => {
        try {
            const promise = await axios.get(`${apiUrl}/cart`, authorization);
            setCartList(promise.data.products);
            calcTotalPrice(promise.data.products);
            setIsLoading(false);
            setIsEmpty(false);
        } catch (error) {
           //navigate('/home');
           setCartList([]);
           setIsLoading(false);
        }

    }, []);


    function calcTotalPrice(products){
        let price = 0;
        products.map((product) => {
            price += Number(product.totalPrice)});

        setTotalPrice(price.toFixed(2));

    }

    async function finishOrder(){

        if (cartList.length > 0) {
            setOrderBody({
                name: user.name,
                email: user.email,
                totalPrice,
                products: cartList
            });
            navigate('/checkout');
        } else {
            alert("adicione produtos ao carrinho para continuar")
        }

    }

    async function deleteCart(){
        try{
            await axios.delete(`${apiUrl}/cart`, authorization);
            setTotalOfProducts(0);
            navigate('/home');

        }catch{
            alert("N??o foi poss??vel deletar o carrinho!");

        }
    }


    return(
        isLoading ? <LoaderSpinner loaderType='oval'/> :
        <>
            <NavBar />
           {cartList.length === 0  || !cartList ?
           <EmptyCart>
                <h1>Seu carrinho est?? vazio</h1>
                <button onClick={() => navigate('/home')} className='goback-button'>Voltar para home</button>
           </EmptyCart> :
            <>
            <Cart>
                <div className='title'>
                    <div className='available-area'>
                        <ion-icon name="cart-outline"></ion-icon>
                        <p>Seu carrinho</p> 
                        <h6 className='price-text'>Total: R${totalPrice}</h6>                   
                    </div>

                </div>
                <div className='available-area'>

                    {

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


            <Footer>
                <div>
                    
                    <button onClick={() => navigate('/home')} className='goback-button'>Escolher mais produtos</button>
                    <button onClick={() => finishOrder()} className='finish-button'>Finalizar compra</button>  
                    <button onClick={() => setDialog(true)} className='delete-button'>Deletar carrinho</button>                    
        
                </div>

            </Footer>
        </div>
        {dialog ? <ConfirmationDialog message="Tem certeza de que deseja excluir o carrinho? :(" image={sadYoda}
            onclickNo={() => setDialog(false)} onclickYes={deleteCart}
            /> : null}
            </>
           }
        </>
    );
}

const Cart = styled.div`
width: 100%;

overflow-y: scroll;
padding-bottom: 20px;
margin-bottom: 250px;

    &::-webkit-scrollbar {
        display: none;
    }

    .title{
        border-bottom: solid 1px #F9CA6F;
        height: 80px;
        display: flex;
        align-items: center;
       
    }

    .title div{
        display: flex;
        align-items: center;
        height: 100%;
        margin: auto;
    }

    .available-area{
        margin: auto;
        position: relative;

        h6 {
            font-family: 'Lexend Mega';
            font-size: 18px;
            text-align: justify;
            padding: 20px;
            line-height: 20px;
            color: #ffffff;
            position: absolute;
            right: 0;
            top: 0;
        }
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
        color: #E19F41;
    }

    h2, h3{
        font-family: 'Lexend Mega';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        color: #ECECEC;
    }

    h6 {
        font-family: 'Lexend Mega';
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


const EmptyCart = styled.div`
min-height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: auto;
    h1{
        font-size: 35px;
        color: white;
    }

    button{
        position: fixed;
        bottom: 10px;
        width: 300px;
        cursor: pointer;
    }

@media(max-width: 330px){
    button{
        width: 90%;
    }
}
    

`
