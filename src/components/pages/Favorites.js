import { useContext } from "react"
import styled from "styled-components";
import NavBar from "../NavBar";
import ProductCard from "../ProductCard";
import ConfirmationButton from "../ConfirmationButton";
import Context from '../../Context';
import AvailableArea from "../styled/AvailableArea";

export default function Favorites() {

    //pegar os dados com axios.get

    //só para teste
    const favoritesList = [
        {   
            _id: 1,
            title: "Camiseta Star Wars",
            price: "89,90",
            image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
            quantity: 1,
            size: "M"
        },
        {   
            _id: 2,
            title: "Caneca Star Wars",
            price: "29,90",
            image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
            quantity: 2
        }
    ];

    const {itemsQuantity, setItemsQuantity} = useContext(Context);

    return (
        <>
        <NavBar />
            <AvailableArea>    
                <ProductsArea>
                    {favoritesList.map((product) => 
                    <ProductCard key={product._id} productId={product._id} src={product.image} title={product.title}
                    price={product.price} quantity={itemsQuantity} />)}
                </ProductsArea>
                <div className="sized-box"></div>
                <ConfirmationButton />
            </AvailableArea>
        </>
    )
}

const ProductsArea = styled.div`
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`