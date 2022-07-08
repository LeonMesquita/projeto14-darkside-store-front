import styled from 'styled-components';
import Context from '../Context';
import { useState, useContext } from "react";
export default function ConfirmationButton({onclick}){
    const {totalOfProducts} = useContext(Context);

    return(
        <Confirmationbutton background={totalOfProducts > 0 ? "#D49943" : "lightgrey"} onClick={totalOfProducts > 0 ? onclick : null}>
            <p>Prosseguir para o carrinho</p>
        </Confirmationbutton>
    );
}

const Confirmationbutton = styled.button`
    width: 550px;
    height: 70px;
    background-color: ${props => props.background};
    position: fixed;
    bottom: 0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    p{
        color: white;
        font-size: 27px;
        font-weight: 700;
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`

//