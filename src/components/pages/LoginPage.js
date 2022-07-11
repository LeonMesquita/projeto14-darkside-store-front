import { useState, useContext } from "react";
import Context from '../../Context';
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import Logo from "../../images/Death Star.png";
import { ThreeDots } from 'react-loader-spinner';
import {Body, Container, Logomarca} from '../LoginStyled.js';
import LoaderSpinner from "../LoaderSpinner";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {apiUrl, user, setUser} = useContext(Context);

    const [carregando, setCarregando] = useState(false);

    async function LogIn(e) {

        e.preventDefault();

        setCarregando(true);

        const body = {email, password};
        try {
        const {data} = await axios.post(`${apiUrl}/login`, body);
            setUser({token: data.token, name: data.name, email: data.email});
            console.log(user);
            navigate("/home");
       }
        catch(error) {
            setCarregando(false);
            alert("Email ou senha incorretos");
        }
    }

    function makeFormLogin() {
        if (!carregando) {
            return (
                <>
                    <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} required />
                    <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} required />
                    <button onClick = {LogIn}>Entrar</button>
                </>
            )
        } else {
            return (
                <>
                    <input type = "email" placeholder = "Email" value = {email} onChange = {e => setEmail(e.target.value)} required disabled={true} />
                    <input type = "password" placeholder = "Senha" value = {password} onChange = {e => setPassword(e.target.value)} required disabled={true} />
                    <button disabled={true}><LoaderSpinner /></button>
                </>
            )
        }
    }

    const formLogin = makeFormLogin();

    return (
        <div className="available-area">
        <Body>
            <Logomarca>
                <img src = {Logo} />
                <h1>DARKSIDE</h1>
                <h2>STORE</h2>          
            </Logomarca>
            
            <Container>
                <div>
                    <h3>Seja bem-vindo, Stormtrooper!</h3>
                    <h6>Faça seu login para continuar</h6>
                </div>
                {formLogin}
                <Link to = "/sign-up"><h5>Ainda não tem uma conta? <strong>Cadastre aqui</strong></h5></Link>
            </Container>
        </Body>
        </div>
    )
}

