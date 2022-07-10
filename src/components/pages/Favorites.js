import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "../ProductCard";
import ConfirmationButton from "../ConfirmationButton";
import Context from '../../Context';
import NavBar from "../NavBar";
import LoaderSpinner from "../LoaderSpinner";

export default function Favorites() {

    const {apiUrl, authorization} = useContext(Context);

    const [favoritesList, setFavoritesList] = useState([]);
    const [productsList, setProductsList] = useState([]);
    
    const [isLoading, setIsLoading] = useState(true);

    async function getProducts(productType){
        try{

            const promise = await axios.get(`${apiUrl}/products/${productType}`);
            setProductsList(promise.data);
            setIsLoading(false);

        } catch(error){
            console.log(error);
        }
    }

    async function getFavorites() {
        try {
            const promise = await axios.get(`${apiUrl}/favorite`, authorization);
            setFavoritesList(promise.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts('Tudo');
        getFavorites();
    }, []);

    return (
        isLoading ? <LoaderSpinner loaderType="oval"/> :
        <>
            <NavBar />
            <AvailableArea> 
                <h1>Seus Favoritos</h1>   
                <ProductsArea>
                    {favoritesList.map((product) => 
                    <ProductCard key={product.productId} productId={product.productId} src={product.image} title={product.title}
                    price={product.price}/>)}
                </ProductsArea>
                <div className="sized-box"></div>
                <ConfirmationButton />
            </AvailableArea>
        </>
    )
}

const ProductsArea = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`

const AvailableArea = styled.div`
    width: 550px;
    min-height: 500px;

    h1 {
        font-size: 30px;
        color: #E19F41;
        margin: 20px 0 0 10px;
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`