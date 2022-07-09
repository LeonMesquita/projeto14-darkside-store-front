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
    const size = product.size ? `Tamanho: ${product.size}` : null;

    return (
        <Container>
            <img src={product.image} alt="" />
            <div>
                <h5>{product.title}</h5>
                <h6>{size}</h6>
                <h6>Quantidade: {product.quantity}</h6>
                <h6>Preço unitário: R${product.price}</h6>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;

    h5 {
        font-weight: bold;
        font-size: 16px;
        line-height: 9px;
        margin-bottom: 20px;
    }

    h6 {
        font-size: 14px;
        line-height: 9px;
        margin-bottom: 7px;
    }

    img {
        width: 80px;
        height: 100px;
        border-radius: 3px;
        margin-bottom: 15px;
    }
`