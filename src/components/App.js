import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import HomePage from "./pages/HomePage";

export default function App(){
    return(
        <div className="main-container">
            <BrowserRouter>
            <NavBar />
                <Routes>
                    <>
                  
                    <Route path="/" element={<HomePage />}/>
                    </>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
};