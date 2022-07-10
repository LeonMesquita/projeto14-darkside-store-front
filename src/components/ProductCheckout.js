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

export default function ProductCheckout({ product }) {

    const size = product.size ? <h2><strong>Tamanho: </strong>{product.size}</h2> : null;

    const totalPartial = (product.price.replace(",",".")*product.quantity).toFixed(2);

    return (
        <Container>
            <img src={product.image} alt="" />
            <Details>
                <h1><strong>{product.title}</strong></h1>
                {size}
                <h2><strong>Preço: </strong> R${product.price}</h2>
            </Details>
            <Quantity>
                <h3><strong>Qtd.</strong></h3>
                <h4>{product.quantity}</h4>
            </Quantity>
            <Total>
                <h3><strong>Total</strong></h3>
                <h4>R${totalPartial.replace(".",",")}</h4>
            </Total>
        </Container>
    )
}

const Container = styled.div`
    padding: 6px;
    display: flex;
    margin-bottom: 15px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.3);

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
        font-size: 16px;
        margin-bottom: 6px;
        color: #E19F41;
    }

    h2 {
        font-size: 14px;
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
        font-size: 16px;
        margin-bottom: 6px;
        color: #E19F41;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 14px;
    }
`

const Total = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24%;

    h3 {
        font-size: 16px;
        margin-bottom: 6px;
        color: #E19F41;
        margin-bottom: 20px;
    }

    h4 {
        font-size: 14px;
    }
`