import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App(){
    return(
        <div className="main-container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={HomePage}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};