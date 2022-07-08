import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";
import Historic from "./pages/Historic";
import { useState } from "react";
import Context from "../Context";
export default function App(){
    const apiUrl = 'http://localhost:5000/'
    //const apiUrl = "https://darkside-store-api.herokuapp.com/";
    const [token, setToken] = useState('');

    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return(
        <div className="main-container">
            <Context.Provider value={{token, setToken, apiUrl, authorization}}>
                <BrowserRouter>
                <NavBar />
                    <Routes>
                        <>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/favorites" element={<Favorites />}/>
                        <Route path="/historic" element={<Historic />}/>
                        </>
                        
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};