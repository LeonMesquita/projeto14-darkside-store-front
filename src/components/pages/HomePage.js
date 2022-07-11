import { useState, useContext, useEffect } from "react";
import Context from '../../Context';
import styled from 'styled-components';
import ConfirmationButton from "../ConfirmationButton";
import ProductCard from "../ProductCard";
import SearchBar from "../SearchBar";
import axios from 'axios';
import NavBar from "../NavBar";
import { useNavigate } from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner";

import sadBabyYoda from "../../images/sad.png"


export default function HomePage() {
    const [searchedProduct, setSearchedProduct] = useState('');
    const { token, setToken, apiUrl, authorization, user, setUser } = useContext(Context);
    const [productsList, setProductsList] = useState([]);
    const [totalOfProducts, setTotalOfProducts] = useState(0);
    const [itemsQuantity, setItemsQuantity] = useState(0);


    
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    //#D49943
    //#F5C974
    const productTypeList = ['Tudo', 'Camisetas', 'Canecas', 'Funkos', 'Actions'];


    async function getProducts(productType) {
        console.log(productType)
        try {

            const promise = await axios.get(`${apiUrl}/products/${productType}`);
            setProductsList(promise.data);
            setIsLoading(false);

        } catch (error) {
            setProductsList([]);
            setIsLoading(false);
        }
    }

    useEffect(async () => {
        getProducts('Tudo');

    }, []);

    function createProducts() {
        if (productsList.length !== 0 && !isLoading) {
            return (
                productsList.map((product) => <ProductCard key={product._id} productId={product._id} src={product.image} title={product.title} price={product.price} quantity={itemsQuantity} />)
            );
        } else if (!isLoading) {
            return (
                <NotFound>
                    <p>No momento não encontramos nenhum produto deste tipo nos nossos estoques</p>
                    <img src={sadBabyYoda} alt="sad baby yoda" />
                </NotFound>
            )
        }
    }

    const products = createProducts()

    return (
        isLoading ? <LoaderSpinner loaderType='oval'/> :
        <>
            <NavBar />
            <SearchBar value={searchedProduct} setValue={setSearchedProduct} />
            <SuggestionsArea>
                <div>
                    {productTypeList.map((type, index) => <button onClick={() => getProducts(type)} key={index}><h5>{type}</h5></button>)}
                </div>
            </SuggestionsArea>
            <div className="available-area">
                <div className="products-area">
                    {products}
                </div>
                <div className="sized-box"></div>
                <div className="confirmation-button">
                    <button onClick={() => navigate('/cart')}> <p>Ir para o carrinho</p></button>
                </div>
               
            </div>
        </>
    );
}


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
        width: 767px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
        margin: auto;
        
    }
    @media(max-width: 767px){
        div{
            width: 100%;
        }
    }
    
    @media(max-width: 400px) {
        h5{
            font-size: 13px;
        }
    }
`

const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 330px;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3);
    padding: 15px;
    border-radius: 10px;

    img {
        width: 240px;
        height: 160px;
        border-radius: 10px;
    }

    p {
        font-family: 'Lexend Mega';
        text-align: justify;
        color: #fff;
        margin-bottom: 20px;
        font-size: 14px;
    }
`