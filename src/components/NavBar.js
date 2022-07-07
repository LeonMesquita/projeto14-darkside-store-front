import styled from 'styled-components';
import trooper from '../images/trooper.png';
import { CartOutline } from 'react-ionicons'

export default function NavBar(){
    return(
        <>
            <Navbar>
                <div>
                    <img src={trooper} alt='trooper'/>
                    <p>Olá, Stormtrooper</p>                
                </div>

              <div>
              <button>
                <ion-icon name="cart-outline"></ion-icon>
                </button>

            <button>
            <ion-icon name="person-outline"></ion-icon>
            </button>
              </div>
            </Navbar> 
            <div className='sized-box'></div>       
        </>

    );
}

const Navbar = styled.div`
    width: 550px;
    height: 90px;
    background-color: #030C22;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    z-index: 1;
    img{
        height: 35px;
        margin-left: 5px;
        
    }


    p{
        color: #F5C974;
        margin-left: 10px;
        font-weight: 400;
        font-size: 20px;
    }

    button{
        border-radius: 50%;
        cursor: pointer;
        background: transparent;
        border: none;
        font-size: 30px;
        transition: font-size 0.5s;
        color: #D49943;

        &:hover{
            font-size: 35px;
        }

 
    }

    div{
        display: flex;
        align-items: center;
        min-width: 20%;
        justify-content: space-between;
    }

    @media(max-width: 550px) {
        width: 100%
    }

`