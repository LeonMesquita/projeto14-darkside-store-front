import { useState } from "react";
import styled from 'styled-components';
import SearchBar from "../SearchBar";
export default function HomePage(){
    const [searchedProduct, setSearchedProduct] = useState('');
    //#D49943
    //#F5C974
    return(
        <>
            <SearchBar value={searchedProduct} setValue={setSearchedProduct}/>
        </>
    );
}

