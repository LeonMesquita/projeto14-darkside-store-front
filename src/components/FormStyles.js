import styled from "styled-components";



const Inputs = styled.div`
    display: flex;
    label {
        width: 180px;
        text-align: end;
        padding-right: 15px;
        padding-top: 5px;
    }
`

const FormCheckout = styled.form`
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 20px 10px 10px;
    border-radius: 3px;
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3);
    margin: auto;

    h1 {
        font-size: 22px;
        color: #051731;
        margin-bottom: 28px;
        font-weight: bold;
        font-family: 'Lexend Mega';
    }

    label {
        font-weight: bold;
        color: #051731;
        font-size: 11px;
        font-family: 'Lexend Mega';
        margin-top: 3px;
    }

    input, select {
        border: 1px solid #051731;
        border-radius: 2px;
        width: 100%;
        height: 26px;
        margin-bottom: 10px;
        background-color: inherit;
        text-indent: 5px;
        color: #051731;
        font-size: 12px;
        font-family: 'Lexend Mega';

        &::placeholder {
            font-size: 11px;
            font-family: 'Lexend Mega';
        }
    }

    form {
        width: 100%;
    }

    button {
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        width: 260px;
        height: 46px;
        margin: 30px auto 10px auto;
        padding: 10px;
        background-color: #FCCB6F;
        border-radius: 5px;
        color: #051731;
        font-weight: bold;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        font-family: 'Lexend Mega';

        &:hover {
            color: #2a7b9e;
        }
    }
`

const Validate = styled.div`
    display: flex;
    width: 100%;
    select {
        width: 70%;
        margin-right: 10px;

        &:last-child {
            width: 30%;
            margin-right: 0;
        }
    }
`

export  {Inputs, FormCheckout, Validate}