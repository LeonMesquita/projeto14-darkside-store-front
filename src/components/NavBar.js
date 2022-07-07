import styled from 'styled-components';
import trooper from '../images/trooper.png';
import star from '../images/Death_Star.svg';
import yoda from '../images/Yoda.svg';

export default function NavBar(){
    return(
        <>
            <Navbar>
                <div>
                    <img src={star} alt='trooper'/>
                    <span>
                    <p>DARKSIDE</p>
                    <h2>STORE</h2>                         
                    </span>
               
                </div>

           

            <button>
                <img src={yoda} alt=''/>
            </button>
            </Navbar> 
            <div className='sized-box'></div>       
        </>

    );
}

const Navbar = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Mega&family=Playball&family=Raleway:wght@400;700&family=Saira+Stencil+One&display=swap');


    width: 550px;
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
        font-size: 30px;
        
        color: #D49943;
        margin-right: 10px;

        &:hover{
           img{
            height: 42px;
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