import { useState, useEffect, useContext } from "react";
import Context from '../../Context';
import styled from "styled-components";
import axios from "axios";
import Request from "../Request";
import NavBar from "../NavBar";
import LoaderSpinner from "../LoaderSpinner";

export default function Historic() {

    /*
    objeto do pedido:
    
    {
    _id: new ObjectId("62cc30349931b274bdbb8042"),
    name: 'test',
    email: 'test@gmail.com',
    totalPrice: '707.00',
    products: [ [Object], [Object], [Object] ],
    date: '11/07/2022',
    address: {
      rua: 'Rua Don Pedro II',
      bairro: 'Bairro Bandeirantes',
      numero: 35,
      cidade: 'Fortaleza',
      estado: 'Ceará'
    },
    payment: 'Boleto',
    userId: new ObjectId("62cb05776739428bc174e17c")
  }
    */

    const { apiUrl, authorization } = useContext(Context);

    const [isLoading, setIsLoading] = useState(true);

    const [requestsList, setRequestsList] = useState([]);

    async function getRequests() {
        try {
            const promise = await axios.get(`${apiUrl}/order`, authorization);
            console.log(promise.data);
            setRequestsList(promise.data);
            setIsLoading(false);

        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getRequests();
    }, []);


    function showRequests() {
        if (requestsList.length !== 0 && !isLoading) {
            return(
                requestsList.map((req, index) => <Request key={index} request={req} />)
            );
        } else if (!isLoading) {
            return(
                <p>Você ainda não realizou nenhum pedido :/</p>
            )
        }
    }

    const requests = showRequests();

    return (
        isLoading ? <LoaderSpinner loaderType="oval"/> :
        <>  
            <NavBar />
            <Container>
                <h1>Seus Pedidos</h1>
                {requests}
            </Container>
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 550px;
    margin-top: 20px;
    color: #ECECEC;
    padding: 0 10px;
    font-family: 'Lexend Mega';

    h1 {
        font-family: 'Lexend Mega';
        font-size: 22px;
        color: #E19F41;
        margin-bottom: 20px;
    }

    @media(max-width: 550px) {
        width: 100%;
    }
`