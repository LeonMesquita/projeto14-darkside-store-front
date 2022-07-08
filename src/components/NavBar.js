import styled from 'styled-components';
import trooper from '../images/trooper.png';
import star from '../images/Death_Star.svg';
import yoda from '../images/Yoda.svg';
import { useNavigate } from 'react-router-dom';

export default function NavBar(){

    const navigate = useNavigate();

    function logout() {
        if(window.confirm("Você realmente deseja sair? :(")) {
            navigate("/");
        }
    }

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
                        </button>
                
                        <Dropdown>
                            <img src={yoda} alt=''/>
                            <ul className='dropdown-content'>
                                <li onClick={() => navigate("/historic")}>Meus pedidos</li>
                                <li onClick={() => navigate("/favorites")}>Favoritos</li>
                                <li onClick={logout}>Sair</li>
                            </ul>
                        </Dropdown>
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

    button{
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 32px;
        transition: font-size 0.5s;
   
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
        padding: 8px 16px;
        text-align: start;
    }

    li {
        margin-bottom: 8px;
        white-space: nowrap;

        &:last-child{
            margin-bottom: 0;
        }

        &:hover {
            color: #08203C;
        }
    }

    &:hover .dropdown-content {
        display: block;
    }
`