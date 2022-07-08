import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Death Star.png";

export default function SignIn() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const apiUrl = "";

    async function SignUp(e) {

        e.preventDefault();
        const body = {name, email, password, confirmPassword};
        try {
            await axios.post(`${apiUrl}/auth/sign-in`, body);
            navigate("/login");
        }
        catch {
            alert("Deu erro ao cadastrar")
        }
    }

    return (
        <Body>
            <Logomarca>
                <img src = {Logo} />
                <h1>DARKSIDE</h1>
                <h2>STORE</h2>          
            </Logomarca>
            
            <Container>
                <input type = "text" placeholder = "Nome" value = {name} onChange = {e => setName(e.target.value)} />
                <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} />
                <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} />
                <input type = "password" placeholder = "Confirmar senha" value = {confirmPassword} onChange = {e => setConfirmPassword(e.target.value)} />
                <button onClick = {SignUp}> <h4>Cadastrar</h4> </button>
                <Link to = "/login"><h5>Já possui uma conta?</h5> <p>Entre aqui</p> </Link>
            </Container>
        </Body>
    )
}

const Body = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


`
const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    width: 223px;
    height: 270px;
    border-radius: 10px;

    input{
        width: 192px;
        height: 25px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        margin-top: 7px;
        margin-bottom: 7px;
        color: black;
    }
    p{
        color: #FCCB6F;
        font-size: 12px;
    }
    button{
        width: 192px;
        height: 25px;
        background-color: #FCCB6F;
        color: black;
        border-radius: 5px;
        margin-top: 21px;
        margin-bottom: 10px;
    }
    h5{
        color: white;
        font-size: 12px;
    }
`
const Logomarca = styled.div `
    display: flex;    
    position: relative;
    margin-top: 180;
    margin-bottom: 65px;

    h1{
        color: white;
        font-size: 20px;
        letter-spacing: 5px;
    }
    h2{
        padding-top: 20px;
        padding-left: 38px;
        color: #E19F41;
        letter-spacing: 21px;
        position: absolute;
    }

`