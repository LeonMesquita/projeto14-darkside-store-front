import { useState } from "react";
import styled from 'styled-components';
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import SuggestionsArea from "../styled/SuggestionsArea";
export default function HomePage(){
    const [searchedProduct, setSearchedProduct] = useState('');
    //#D49943
    //#F5C974
    const productTypeList = ['Tudo', 'Camisetas', 'Canecas', 'Funkos', 'Actions'];
    const products = Array(20).fill(
        {
            name: 'Camiseta Star Wars',
            type: 'camiseta'
        }
    );
    return(
        <>
            <SearchBar value={searchedProduct} setValue={setSearchedProduct}/>
            <SuggestionsArea>
                {productTypeList.map((type, index) => <button key={index}>{type}</button>)}
            </SuggestionsArea>
            <ProductsArea>
                {products.map((product) => <ProductCard />)}
                
            </ProductsArea>
        </>
    );
}


const ProductsArea = styled.div`
  //  height: 100vh;
  margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`