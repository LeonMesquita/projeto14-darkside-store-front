import styled from "styled-components";
import ProductHist from "./ProductHist";

export default function Request({ request }) {

    /* formato do objeto request
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
                    price: "89,90",
                    image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
                    quantity: 2
                }
            ]
        }
    */

    function showProducts() {
        return (
            request.products.map((product, index) => <ProductHist key={index} product={product} />)
        );
    }

    function calculateTotal() {
        let total = 0;
        request.products.forEach((product) => {
            const priceInNumber = parseFloat(product.price.replace(',','.'));
            total += priceInNumber*product.quantity;
        })

        return total.toFixed(2).replace(".",",");
    }

    const products = showProducts();
    const total = calculateTotal();

    return(
        <Container>
            <Products>
                {products}
            </Products>
            <Summary>
                <h2>Resumo da compra</h2>
                <h3>Número do pedido: {request.id}</h3>
                <h3>Data: {request.date}</h3>
                <h3>Valor total: R${total}</h3>
            </Summary>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #03223F;
    margin-bottom: 25px;
    border-radius: 3px;
    padding: 20px 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`

const Products = styled.div`
    display: flex;
    align-items: flex-start;
    width: 50%;
    overflow-x: scroll;
    border-right: 2px solid #A7A7A7;
`

const Summary = styled.div`
    width: 50%;
    padding: 0px 20px;

    h2 {
        font-weight: bold;
        font-size: 16px;
        line-height: 9px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 14px;
        line-height: 9px;
        margin-bottom: 7px;
    }
`