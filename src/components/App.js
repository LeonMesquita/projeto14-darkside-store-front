import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import Historic from "./pages/Historic";
import { useState } from "react";
import Context from "../Context";
import Login from "./pages/LoginPage";
import SignUp from "./pages/SignUpPage";
export default function App(){
    //const apiUrl = 'http://localhost:5001'
    const apiUrl = "https://darkside-store-api.herokuapp.com";
    const [totalOfProducts, setTotalOfProducts] = useState(0);
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const [user, setUser] = useState({
        token:'',
        name: '',
        email: ''
    });


    const authorization = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }
    return(
        <div className="main-container">
            <Context.Provider value={{ apiUrl, authorization, totalOfProducts, setTotalOfProducts, user, setUser, itemsQuantity, setItemsQuantity }}>
                <BrowserRouter>
                    <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SignUp />}/>
                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/favorites" element={<Favorites />}/>
                    <Route path="/historic" element={<Historic />}/>  
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};