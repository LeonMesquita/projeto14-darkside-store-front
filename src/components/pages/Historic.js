import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import Request from "../Request";
import NavBar from "../NavBar";

export default function Historic() {

    const { apiUrl, authorization } = useContext(Context);

    const [requestsList, setRequestsList] = useState([
        {
            id: "1",
            date: "12/04/2022",
            products: [
                {
                    title: "Camiseta Star Wars",
                    price: "89,90",
                    image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
                    quantity: 1,
                    size: "M"
                },
                {
                    title: "Caneca Star Wars",
                    price: "29,90",
                    image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
                    quantity: 2
                }
            ]
        },
        {
            id: "2",
            date: "14/05/2022",
            products: [
                {
                    title: "Camiseta Star Warssss sssssss",
                    price: "89,90",
                    image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
                    quantity: 2,
                    size: "M"
                },
                {
                    title: "Caneca Star Wars",
                    price: "29,90",
                    image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
                    quantity: 1
                }
            ]
        }
    ]);

    //pegar os dados com axios.get("/historic")
    async function getRequests() {
        try {
            const promise = await axios.get(`${apiUrl}/historic`, authorization);
            console.log(promise.data);
            setRequestsList(promise.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRequests();
    }, []);


    function showRequests() {
        if (requestsList.length === 0) {
            return (
                <></>
            );
        } else {
            return (
                requestsList.map((req, index) => <Request key={index} request={req} />)
            );
        }
    }

    const requests = showRequests();

    return (
        <>
            <NavBar />
            <Container>
                <h1>Pedidos</h1>
                {requests}
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 40px;
    white-space: nowrap;
    color: #ECECEC;

    h1 {
        font-size: 30px;
        color: #E19F41;
        margin-bottom: 20px;
    }
`