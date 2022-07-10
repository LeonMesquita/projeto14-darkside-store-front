import styled from "styled-components";

/* formato objeto product
    {
        title: "Camiseta Star Wars",
        price: "89,90",
        image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
        quantity: 1,
        size: "M"
    }
*/

export default function ProductHist({ product }) {
    const size = product.size ? <h6>Tamanho: <strong>{product.size}</strong></h6> : null;

    return (
        <Container>
            <div>
                <img src={product.image} alt="" />
            </div>
            <Description>
                <h5>{product.title}</h5>
                <h6>{size}</h6>
                <h6>Quantidade: <strong>{product.quantity}</strong></h6>
                <h6>Preço unit.: <strong>R${product.price}</strong></h6>
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
        width: 60px;
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