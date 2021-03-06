import styled from 'styled-components';
import star from '../images/Death_Star.svg';
import yoda from '../images/Yoda.svg';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';
import { useState, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import axios from 'axios';
export default function NavBar(){

    const navigate = useNavigate();

    function logout() {
        if(window.confirm("Você realmente deseja sair? :(")) {
            navigate("/");
        }
    }

    const {apiUrl, totalOfProducts, setTotalOfProducts, authorization} = useContext(Context);
    const location = useLocation();
    useEffect(async () => {
        try{
            const promise = await axios.get(`${apiUrl}/cart`, authorization);
            console.log(promise.data)
            calcTotalQuantity(promise.data.products);
        }catch(error){
           // navigate('/');
        }

    },[]);

    function calcTotalQuantity(cart){  
        let sum = 0;
        cart.map((item) => {
            sum += item.itemQuantity;
        });
        setTotalOfProducts(sum);
    }


    return(
        location.pathname === '/' || location.pathname === '/sign-up' ? null :
        <>
            <Navbar>
                <div className='navbar-container'>
                    <div onClick={() => navigate("/home")}>
                        <img src={star} alt='trooper'/>
                        <span>
                        <p>DARKSIDE</p>
                        <h2>STORE</h2>                         
                        </span>
                    </div>

                    <div className="icons-div">
                        <button onClick={() => navigate("/cart")}>
                        <ion-icon name="cart-outline"></ion-icon>
                        {totalOfProducts > 0 ? <div className='cart-products'><h6>{totalOfProducts}</h6></div>
                        : null    
                        }
                        </button>
                
                        <Dropdown>
                            <img src={yoda} alt=''/>
                            <ul className='dropdown-content'>
                                <li onClick={() => navigate("/historic")}>
                                    <ion-icon name="person"></ion-icon>
                                    Meus pedidos
                                </li>
                                <li onClick={() => navigate("/favorites")}>
                                    <ion-icon name="star"></ion-icon>
                                    Favoritos
                                </li>
                                <li onClick={logout}>
                                    <ion-icon name="log-out"></ion-icon>
                                    Sair
                                </li>
                            </ul>
                        </Dropdown>
                    </div>                    
                </div>
            </Navbar> 
            <div className='sized-box'></div>       
        </> 

    );
}

//
const Navbar = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Playball&family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap');

    background-image: linear-gradient(to right, #031027, #08203D, #031027);
    width: 100%;
    height: 110px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 1;
    border-bottom: solid 1px #A7A7A7;;
    img{
        height: 37px;
        margin-left: 5px;
        transition: height 0.5s;
    }

    .navbar-container {
        width: 80%;
        margin: auto;
        @media(max-width: 767px) {
        width: 100%

    }
    }

    .cart-products {
        width: 25px;
        height: 25px;
        background: red;
        position: absolute;
        top: -5px;
        left: -5px;
        align-items: center;
        justify-content: center;
        transition: height 0.5s;
        transition: width 0.5s;
        border-radius: 50%;
    }

    p {
        font-family: 'Lexend Mega', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        letter-spacing: 5px;
        color: #FFFFFF;
    }

    h2 {
        font-family: 'Lexend Mega';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 1.825em;
        color: #E19F41;
        margin-top: 3px;
        text-align: center;
    }

    h6 {
        color: white;
        font-size: 17px;
        font-weight: 900;
    }

    button {
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 32px;
        transition: font-size 0.5s;
        position: relative;
        color: #F9D978;
        margin-right: 10px;
    }

    div {
        display: flex;
        align-items: center;
        width: 120px;
        height: 100%;
        justify-content: space-between;
    }

    span {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 400px) {
        p {
            font-size: 18px;
        }
        h2 {
            font-size: 10px;
        }
        div{
            min-width: 20%;
        }

    }


`

const Dropdown = styled.button`
    position: relative;
    display: inline-block;

    .dropdown-content {
        display: none;
        position: absolute;
        right: 0;   
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        color: #4D4D4D; 
        font-size: 16px;
        padding: 8px 12px;
        text-align: start;
    }

    li {
        margin-bottom: 8px;
        white-space: nowrap;
        display: flex;

        &:last-child{
            margin-bottom: 0;
        }

        &:hover {
            color: #08203C;
        }

        ion-icon {
            margin-right: 6px;
        }
    }

    &:hover .dropdown-content {
        display: block;
    }
`