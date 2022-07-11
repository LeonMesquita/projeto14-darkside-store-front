import styled from "styled-components"

/*
    {
        _id: 2,
        title: "Caneca Star Wars",
        price: "29,90",
        image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
        quantity: 2
    } 
*/

        /*
            products:
            {
                image: "https://img.elo7.com.br/product/original/2C68ACB/camiseta-star-wars-logo-arte-camisa-star-wars-imagem.jpg"
                itemQuantity: 2
                price: 38.9
                productId: "62c87eeddaa7673f12466da0"
                title: "Camiseta Star Wars Logo"
                totalPrice: 77.8
            }
        */

export default function ProductCheckout({ product }) {

    //const size = product.size ? <h2><strong>Tamanho: </strong>{product.size}</h2> : null;

    //const totalPartial = product.totalPrice.replace(",",".").toFixed(2);

    return (
        <Container>
            <img src={product.image} alt="" />
            <Details>
                <h1><strong>{product.title}</strong></h1>
                <h2><strong>Preço: </strong> R${product.price.toFixed(2)}</h2>
            </Details>
            <Quantity>
                <h3><strong>Qtd.</strong></h3>
                <h4>{product.itemQuantity}</h4>
            </Quantity>
            <Total>
                <h3><strong>Total</strong></h3>
                <h4>R${product.totalPrice.toFixed(2)}</h4>
            </Total>
        </Container>
    )
}

const Container = styled.div`
    padding: 6px;
    display: flex;
    margin-bottom: 10px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3);
    font-family: 'Lexend Mega';

    img {
        width: 80px;
        height: 90px;
        border-radius: 3px;
        margin-right: 8px;
    }
`

const Details = styled.div`
    word-wrap: break-word;
    font-size: 14px;
    width: calc(60% - 80px);

    h1 {
        font-size: 13px;
        margin-bottom: 6px;
        color: #E19F41;
    }

    h2 {
        font-size: 11px;
    }
    
    strong {
        font-weight: bold;
    }
`

const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16%;

    h3 {
        font-size: 13px;
        margin-bottom: 6px;
        color: #E19F41;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 11px;
    }
`

const Total = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24%;

    h3 {
        font-size: 13px;
        margin-bottom: 6px;
        color: #E19F41;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 11px;
    }
`