import styled from 'styled-components';
import trooper from '../images/trooper.png';
import star from '../images/Death_Star.svg';
import yoda from '../images/Yoda.svg';
import Context from '../Context';
import { useState, useContext } from "react";


export default function NavBar(){
    const {totalOfProducts} = useContext(Context);


    return(
        <>
            <Navbar>
                <div className='navbar-container'>
                    <div>
                        <img src={star} alt='trooper'/>
                        <span>
                        <p>DARKSIDE</p>
                        <h2>STORE</h2>                         
                        </span>
                
                    </div>

                    <div>
                        <button>
                        <ion-icon name="cart-outline"></ion-icon>
                        {totalOfProducts > 0 ? <div className='cart-products'><h6>{totalOfProducts}</h6></div>
                        : null    
                        }
                        </button>

                
                        <button>
                            <img src={yoda} alt=''/>
                        </button>
                    </div>                    
                </div>



            </Navbar> 
            <div className='sized-box'></div>       
        </>

    );
}

const Navbar = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Playball&family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap');


    width: 100%;
    height: 110px;
    background-image: linear-gradient(to right, #031027, #08203D, #031027);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 1;
    border-bottom: solid 2px #A7A7A7;;
    img{
        height: 37px;
        margin-left: 5px;
        transition: height 0.5s;
        
    }

    .navbar-container{
        width: 550px;
        margin: auto;
    }

    .cart-products{
  
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


    p{
        font-family: 'Lexend Mega', sans-serif;

        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        letter-spacing: 5px;
        color: #FFFFFF;
    }

    h2{
        font-family: 'Lexend Mega';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 1.825em;
        color: #E19F41;
        margin-top: 3px;
        text-align: center;
    }

    h6{
        color: white;
        font-size: 17px;
        font-weight: 900;
    }

    button{
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 32px;
        transition: font-size 0.5s;
        position: relative;

        
        color: #F9D978;
        margin-right: 10px;

        &:hover{
            font-size: 35px;
           img{
            height: 40px;
           }
        }

 
    }

    div{
        display: flex;
        align-items: center;
        min-width: 20%;
        justify-content: space-between;
    }
    span{
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 550px) {
        width: 100%
    }

`