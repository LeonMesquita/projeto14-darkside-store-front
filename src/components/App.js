import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import Historic from "./pages/Historic";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useState } from "react";
import Context from "../Context";
export default function App(){
    //const apiUrl = 'http://localhost:5000/'
    const apiUrl = "https://darkside-store-api.herokuapp.com/";
    const [token, setToken] = useState('');
    const [totalOfProducts, setTotalOfProducts] = useState(0);


    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return(
        <div className="main-container">
            <Context.Provider value={{token, setToken, apiUrl, authorization, totalOfProducts, setTotalOfProducts}}>
                <BrowserRouter>
                    <Routes>
                        <>
                        <Route path="/" element={<LoginPage />}/>
                        <Route path="/sign-up" element={<SignUpPage />}/>
                        <Route path="/products" element={<HomePage />}/>
                        <Route path="/favorites" element={<Favorites />}/>
                        <Route path="/historic" element={<Historic />}/>
                        </>
                        
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};