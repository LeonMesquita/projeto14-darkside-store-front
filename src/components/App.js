import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import Context from "../Context";
import Login from "./pages/LoginPage";
import SignIn from "./pages/SignInPage";
export default function App(){
    const apiUrl = 'http://localhost:5000'
    //const apiUrl = "https://darkside-store-api.herokuapp.com/";
    const [totalOfProducts, setTotalOfProducts] = useState(0);
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
            <Context.Provider value={{apiUrl, authorization, totalOfProducts, setTotalOfProducts, user, setUser}}>
                <BrowserRouter>
                <NavBar />
                    <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sign-up" element={<SignIn />}/>
                        <Route path="/home" element={<HomePage />}/>
             
                        
                    </Routes>
                </BrowserRouter>
            </Context.Provider>
        </div>
    );
};