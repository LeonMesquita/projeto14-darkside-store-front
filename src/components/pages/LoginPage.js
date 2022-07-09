import { useState, useContext } from "react";
import Context from '../../Context';
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Death Star.png";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {apiUrl, user, setUser} = useContext(Context);

    async function LogIn(e) {

        e.preventDefault();
        const body = {email, password};
        try {
        const {data} = await axios.post(`${apiUrl}/login`, body);
            setUser({token: data.token, name: data.name, email: data.email});
            console.log(user);
            navigate("/home");
       }
        catch(error) {
            //alert("Email ou senha incorretos");
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
                <div>
                    <h3>Seja bem-vindo!</h3>
                    <h6>Faça seu login para continuar</h6>
                </div>
                <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} />
                <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} />
                <button onClick = {LogIn}> <h4>Entrar</h4> </button>
                <Link to = "/sign-up"><h5>Ainda não tem uma conta? <strong>Cadastre aqui</strong></h5></Link>
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
    width: 330px;
    border-radius: 10px;
    padding: 20px 0 30px 0;
    margin-top: 40px;

    div{
        width: 80%;
        height: 45px;
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        font-size: 28px;
        color: #E19F41;
        line-height: 15px;
        margin-bottom: 10px;
    }
    h6 {
        font-size: 16px;
        color: white;
        line-height: 15px;
    }
    input{
        width: 90%;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 5px;
        margin-bottom: 10px;
        color: #051731;
        font-size: 20px;

        &::placeholder {
            font-family: 'Lexend Mega';
            font-weight: 400;
            font-size: 20px;
            color: #ADADAD;
        }
    }
    strong{
        color: #FCCB6F;
    }
    button{
        width: 90%;
        height: 40px;
        background-color: #FCCB6F;
        color: #051731;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 5px;
        border: none;
        font-size: 18px;
        font-weight: bold;
    }
    h5{
        color: white;
        font-size: 14px;
    }
`
const Logomarca = styled.div `
    display: flex;    
    position: relative;
    margin-top: 120px;

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