import { useState, useContext, useEffect } from "react";
import Context from '../../Context';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Death Star.png";
import { ThreeDots } from 'react-loader-spinner';

export default function SignIn() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const {apiUrl} = useContext(Context);
    
    const [carregando, setCarregando] = useState(false);

    async function SignUp(e) {

        e.preventDefault();

        setCarregando(true);

        const body = {name, email, password, confirmPassword};
        try {
            await axios.post(`${apiUrl}/sign-up`, body);
            navigate("/");
        }
        catch(error) {
            console.log(error)
            setCarregando(false);
            //alert("Deu erro ao cadastrar")
        }
    }

    function makeFormSignUp() {
        if (!carregando) {
            return (
                <>
                    <input type = "text" placeholder = "Nome" value = {name} onChange = {e => setName(e.target.value)} required />
                    <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} required />
                    <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} required />
                    <input type = "password" placeholder = "Confirmar senha" value = {confirmPassword} onChange = {e => setConfirmPassword(e.target.value)} required />
                    <button onClick = {SignUp} >Cadastrar</button>
                </>
            )
        } else {
            return (
                <>
                    <input type = "text" placeholder = "Nome" value = {name} onChange = {e => setName(e.target.value)} required disabled={true} />
                    <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} required disabled={true} />
                    <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} required disabled={true} />
                    <input type = "password" placeholder = "Confirmar senha" value = {confirmPassword} onChange = {e => setConfirmPassword(e.target.value)} required disabled={true} />
                    <button disabled={true}><ThreeDots height={70} width={70} color="#07203D" /></button>
                </>
            )
        }
    }

    const formSignUp = makeFormSignUp();

    return (
        <Body>
            <Logomarca>
                <img src = {Logo} />
                <h1>DARKSIDE</h1>
                <h2>STORE</h2>          
            </Logomarca>
            
            <Container>
                {formSignUp}
                <Link to = "/"><h5>Já possui uma conta? <strong>Entre aqui</strong></h5> </Link>
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

    input {
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
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 5px;
        border: none;
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        &:disabled {
            opacity: 0.7;
        }
    }

    h5 {
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