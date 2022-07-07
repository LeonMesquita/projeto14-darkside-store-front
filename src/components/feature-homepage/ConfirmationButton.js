import styled from 'styled-components';
export default function ConfirmationButton(){
    return(
        <Confirmationbutton>
            <p>Prosseguir para o carrinho</p>
        </Confirmationbutton>
    );
}

const Confirmationbutton = styled.button`
    width: 550px;
    height: 70px;
    background-color: #D49943;
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