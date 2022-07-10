import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import ProductCard from "../ProductCard";
import ConfirmationButton from "../ConfirmationButton";
import Context from '../../Context';

export default function Favorites() {

    const {itemsQuantity, apiUrl, authorization} = useContext(Context);

    const [favoritesList, setFavoritesList] = useState([]);

    async function getFavorites() {
        try {
            const promise = await axios.get(`${apiUrl}/favorite`, authorization);
            console.log(promise.data);
            setFavoritesList(promise.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getFavorites();
    }, []);

    return (
        <>
            <AvailableArea> 
                <h1>Seus Favoritos</h1>   
                <ProductsArea>
                    {favoritesList.map((product) => 
                    <ProductCard key={product._id} productId={product._id} src={product.image} title={product.title}
                    price={product.price} quantity={itemsQuantity} isfavorite={true}/>)}
                </ProductsArea>
                <div className="sized-box"></div>
                <ConfirmationButton />
            </AvailableArea>
        </>
    )
}

const ProductsArea = styled.div`
    margin-top: 10px;
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