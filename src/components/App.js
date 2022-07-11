import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import Historic from "./pages/Historic";
import { useState } from "react";
import Context from "../Context";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
import styled from "styled-components";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import NavBar from "./NavBar";
import Request from "./Request";
import AddressPage from "./pages/AdressPage";
import PaymentPage from "./pages/PaymentPage";

export default function App(){
    //const apiUrl = 'http://localhost:5000'
    const apiUrl = "https://darkside-store-api.herokuapp.com";
    const [totalOfProducts, setTotalOfProducts] = useState(0);
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [user, setUser] = useState({
        token:'',
        name: '',
        email: ''
    });

    const [orderBody, setOrderBody] = useState({});


    const authorization = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    return(
        <MainContainer>
            
            <Context.Provider value={{ apiUrl, authorization, totalOfProducts, setTotalOfProducts,
                user, setUser, itemsQuantity, setItemsQuantity, orderBody, setOrderBody }}>
                <BrowserRouter>
            
                    <Routes>               
                        <Route path="/" element={<Login />}/>
                        <Route path="/sign-up" element={<SignUp />}/>
                        <Route path="/home" element={<HomePage />}/>
                        <Route path="/favorites" element={<Favorites />}/>
                        <Route path="/historic" element={<Historic />}/>
                        <Route path="/cart" element={<CartPage />}/>
                        <Route path="/checkout" element={<Checkout />}/>
                        <Route path="/address" element={<AddressPage />}/>
                        <Route path="/payment" element={<PaymentPage />}/>
                        <Route path="/request" element={<Request />}/>  
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </MainContainer>
    );
};

const MainContainer = styled.div`
    min-height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`