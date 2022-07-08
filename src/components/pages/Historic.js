import styled from "styled-components";

export default function Historic() {

    //pegar os dados com axios.get
    /*
        {
            title: "Camiseta Star Wars",
            price: "89,90",
            image: "https://image.png"
            quantity: 1,
            size: "M",
            date: "DD/MM/YY"
        } 
    */

    const pedidos = [
        {
            id: "1",
            date: "12/04/2022",
            products:[
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
        },
        {
            id: "2",
            date: "14/05/2022",
            products:[
                {
                    title: "Camiseta Star Wars",
                    price: "89,90",
                    image: "https://www.camisetas4fun.com.br/media/product/16f/camiseta-star-wars-afa.jpg",
                    quantity: 2,
                    size: "M"
                },
                {
                    title: "Caneca Star Wars",
                    price: "89,90",
                    image: "https://static3.tcdn.com.br/img/img_prod/460977/caneca_star_wars_logo_preto_e_amarelo_64693_1_20201211171758.jpeg",
                    quantity: 1
                }
            ]
        }

    ];

    return (
        <Container>

        </Container>
    )
}

const Container = styled.div`
`