import { useState } from "react";
import styled from 'styled-components';
import SearchBar from "../SearchBar";
export default function HomePage(){
    const [searchedProduct, setSearchedProduct] = useState('');
    //#D49943
    //#F5C974
    const productTypeList = ['Tudo', 'Camisetas', 'Canecas', 'Funkos', 'Actions'];
    return(
        <>
            <SearchBar value={searchedProduct} setValue={setSearchedProduct}/>
            <SuggestionsArea>
                {productTypeList.map((type) => <button>{type}</button>)}
            </SuggestionsArea>
        </>
    );
}

const SuggestionsArea = styled.div`
    height: 35px;
    width: 100%;
    background: #D69A44;
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: space-evenly;
    overflow: scroll;
    
    button{
        border: none;
        background: transparent;
        color: white;
        font-weight: 700;
        font-size: 17px;
        cursor: pointer;
        transition: font-size 0.2s;

        &:hover{
       
            font-size: 20px;

    }

    }



`
