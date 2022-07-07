import { useState, useContext } from "react";
import Context from '../../Context';
import styled from 'styled-components';
import ConfirmationButton from "../ConfirmationButton";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import SuggestionsArea from "../styled/SuggestionsArea";
export default function HomePage(){
    const [searchedProduct, setSearchedProduct] = useState('');
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const {apiUrl, authorization,token, setToken} = useContext(Context);
    //#D49943
    //#F5C974
    const productTypeList = ['Tudo', 'Camisetas', 'Canecas', 'Funkos', 'Actions'];
    const products = Array(20).fill(
        {
            title: 'Camiseta Dupla Face Star Wars Saga',
            type: 'camiseta',
            price: '89,90',
            image: 'https://lojapiticas.vteximg.com.br/arquivos/ids/165002-258-258/star-wars-duplace-face-5.png?v=637637756454970000'
        }
    );

    function addItem(){
        setItemsQuantity(itemsQuantity+1);
    }
    function removeItem(){
        if (itemsQuantity > 0)
        setItemsQuantity(itemsQuantity-1);
    }
    return(
        <>
            <SearchBar value={searchedProduct} setValue={setSearchedProduct}/>
            <SuggestionsArea>
                {productTypeList.map((type, index) => <button key={index}>{type}</button>)}
            </SuggestionsArea>
            <ProductsArea>
                {products.map((product) => 
                <ProductCard src={product.image} title={product.title}
                price={product.price} quantity={itemsQuantity} add={addItem} remove={removeItem}/>)}
            </ProductsArea>
            <div className="sized-box"></div>
            <ConfirmationButton />
        </>
    );
}


const ProductsArea = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`