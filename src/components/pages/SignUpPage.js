import { useState, useContext, useEffect } from "react";
import Context from '../../Context';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Death Star.png";
import { ThreeDots } from 'react-loader-spinner';
import {Body, Container, Logomarca} from '../LoginStyled.js';
import LoaderSpinner from "../LoaderSpinner";



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
            alert("Cadastro inválido!");
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
                    <button disabled={true}><LoaderSpinner /></button>
                </>
            )
        }
    }

    const formSignUp = makeFormSignUp();

    return (
        <div className="available-area">
        <Body>
            <Logomarca>
                <img src = {Logo} />
                <h1>DARKSIDE</h1>
                <h2>STORE</h2>          
            </Logomarca>
            
            <Container>
            <h3>Junte-se ao lado Geek da força!</h3>

                {formSignUp}
                <Link to = "/"><h5>Já possui uma conta? <strong>Entre aqui</strong></h5> </Link>
            </Container>
        </Body>
        </div>
    )
}

