import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
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
                        </>
                        
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};