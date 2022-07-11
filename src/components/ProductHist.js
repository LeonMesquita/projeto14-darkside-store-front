import styled from "styled-components";

/* formato objeto product
    {
        image: "https://img.elo7.com.br/product/original/2C68ACB/camiseta-star-wars-logo-arte-camisa-star-wars-imagem.jpg",
        itemQuantity: 2,
        price: 38.9,
        productId: "62c87eeddaa7673f12466da0",
        title: "Camiseta Star Wars Logo",
        totalPrice: 77.8
    }
*/

export default function ProductHist({ product }) {

    return (
        <Container>
            <div>
                <img src={product.image} alt="" />
            </div>
            <Description>
                <h5>{product.title}</h5>
                <h6>Quantidade: <strong>{product.itemQuantity}</strong></h6>
                <h6>Preço unit.: <strong>R${String(product.price).replace(".",",")}</strong></h6>
            </Description>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    width: 100%;
    flex: none;

    img {
        width: 70px;
        height: 80px;
        border-radius: 3px;
        margin-bottom: 15px;
    }

    strong {
        font-weight: bold;
    }
`

const Description = styled.div`
    width: 100%;
    word-wrap: break-word;
    padding-right: 10px;

    h5 {
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 15px;
        color: #E19F41;
    }

    h6 {
        font-size: 11px;
        line-height: 15px;
        margin-bottom: 1px;
    }
`