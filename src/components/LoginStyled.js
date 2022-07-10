import styled from 'styled-components';

const Body = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    text-align: center;
`
const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    width: 90%;
    max-width: 550px;
    border-radius: 10px;
    padding: 20px 0 30px 0;
    margin-top: 40px;

    div {
        width: 100%;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h3 {
        font-size: 28px;
        color: #E19F41;
        margin-bottom: 15px;
        text-align: center;
    }

    h6 {
        font-size: 16px;
        color: white;
        line-height: 15px;
    }

    input {
        width: 90%;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 10px;
        margin-top: 20px;
        color: #051731;
        font-size: 20px;

        &::placeholder {
            font-family: 'Lexend Mega';
            font-weight: 400;
            font-size: 20px;
            color: #ADADAD;
        }

        &:disabled {
            background-color: #F2F2F2;
            color: #AFAFAF;
        }
    }

    strong {
        color: #FCCB6F;
    }

    button {
        width: 90%;
        height: 40px;
        background-color: #FCCB6F;
        color: #051731;
        border-radius: 10px;
        margin-top: 10px;
        margin-bottom: 5px;
        margin-top: 20px;
        border: none;
        font-size: 25px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        &:disabled {
            opacity: 0.7;
        }

        div {
            margin-top: 5px;
        }
    }

    h5 {
        color: white;
        font-size: 14px;
        margin-top: 10px;
    }
`
const Logomarca = styled.div `
    display: flex;    
    position: relative;
    margin-top: 120px;
    height: 45px;
    h1 {
        color: white;
        font-size: 25px;
        letter-spacing: 5px;
    }

    h2 {
        left: 52px;

        bottom: 0;
        font-size: 18px;
        color: #E19F41;
        letter-spacing: 21px;
        position: absolute;
    }

    img{
        height: 40px;
    }

`


export {Body, Container, Logomarca}