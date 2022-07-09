import React, {useState, useContext} from "react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Context from "../../Context";
import Logo from "../../images/Death Star.png";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(Context);
    const navigate = useNavigate();
    const apiUrl = "";

    async function LogIn(e) {

        e.preventDefault();
        const body = {email, password};
        try {
        const {data} = axios.post(`${apiUrl}/auth/login`, body);
            setUser({token: data.token, name: data.name});
            navigate("/products");
       }
        catch(error) {
            alert("Email ou senha incorretos");
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
                <h3>Seja bem-vindo! Faça seu login para continuar</h3>
                <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} />
                <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} />
                <p>Esqueceu a senha?</p>
                <button onClick = {LogIn}> <h4>Entrar</h4> </button>
                <Link to = "/sign-up"><h5>Ainda não tem uma conta?</h5> <p>Cadastre aqui</p> </Link>
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

    h3{
        width: 133px;
        height: 45px;
        overflow-wrap: break-word;  
        word-wrap: break-word; 
        word-break: break-word;
        font-size: 18px;
        color: white;
        line-height: 15px;
        margin-bottom: 21px;
        margin-top: 19px;
    }
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
    margin-top: 120px;
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