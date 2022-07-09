import { useState, useContext, useEffect } from "react";
import Context from '../../Context';
import styled from 'styled-components';
import ConfirmationButton from "../ConfirmationButton";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import SuggestionsArea from "../styled/SuggestionsArea";
import axios from 'axios';
import AvailableArea from "../styled/AvailableArea";
import NavBar from "../NavBar";


export default function HomePage(){
    const [searchedProduct, setSearchedProduct] = useState('');
    const [itemsQuantity, setItemsQuantity] = useState(0);
    const {token, setToken, apiUrl, authorization} = useContext(Context);
    const [productsList, setProductsList] = useState([]);
    const [totalOfProducts, setTotalOfProducts] = useState(0);
    
    //#D49943
    //#F5C974
    const productTypeList = ['Tudo', 'Camisetas', 'Canecas', 'Funkos', 'Actions'];


    async function getProducts(productType){
        console.log(productType)
        try{
            const promise = await axios.get(`${apiUrl}products/${productType}`);
            console.log(promise.data);
            setProductsList(promise.data);

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts('Tudo');

    }, []);




    function addItem(){
        setItemsQuantity(itemsQuantity+1);
    }
    function removeItem(){
        if (itemsQuantity > 0)
        setItemsQuantity(itemsQuantity-1);
    }
    return(
        <>
            <NavBar />
            <SearchBar value={searchedProduct} setValue={setSearchedProduct}/>
            <SuggestionsArea>
                <div>
                    {productTypeList.map((type, index) => <button onClick={() => getProducts(type)} key={index}><h5>{type}</h5></button>)}
                </div>

            </SuggestionsArea>
        <AvailableArea>    
            <ProductsArea>
                {productsList.map((product) => 
                <ProductCard key={product._id} productId={product._id} src={product.image} title={product.title}
                price={product.price} quantity={itemsQuantity} add={addItem} remove={removeItem}/>)}
            </ProductsArea>
            <div className="sized-box"></div>
            <ConfirmationButton />
        </AvailableArea>
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