import { useState, useContext, useEffect } from "react";
import Context from '../../Context';
import styled from 'styled-components';
import ConfirmationButton from "../ConfirmationButton";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import axios from 'axios';
import NavBar from "../NavBar";


export default function HomePage(){
    const [searchedProduct, setSearchedProduct] = useState('');
    const {token, setToken, apiUrl, authorization, user, setUser, itemsQuantity, setItemsQuantity} = useContext(Context);
    const [productsList, setProductsList] = useState([]);
    const [totalOfProducts, setTotalOfProducts] = useState(0);
    
    //#D49943
    //#F5C974
    const productTypeList = ['Tudo', 'Camisetas', 'Canecas', 'Funkos', 'Actions'];


    async function getProducts(productType){
        console.log(productType)
        try{
            const promise = await axios.get(`${apiUrl}/products/${productType}`);
            console.log(promise.data);
            setProductsList(promise.data);

        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts('Tudo');

    }, []);

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
                    price={product.price} quantity={itemsQuantity} />)}
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

const AvailableArea = styled.div`
    width: 550px;
    min-height: 500px;

    @media(max-width: 550px) {
        width: 100%;
    }
`

const SuggestionsArea = styled.div`
    height: 50px;
    width: 100%;
    background: #FCCB6F; 
    button{
     
        border: none;
        background: transparent;
        color: #03223F;
        font-weight: 700;
        font-size: 17px;
        cursor: pointer;
        transition: font-size 0.2s;
        &:hover{
       
            font-size: 20px;
            text-decoration: underline;

    }

    }

    div{
        height: 100%;
        max-width: 550px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
        margin: auto;
        
    }
    
    @media(max-width: 400px) {
        h5{
            font-size: 13px;
        }
    }
`