import styled from 'styled-components';
export default function ProductCard(){
    return(
        <Productcard>

        </Productcard>
    );
}

const Productcard = styled.div`
    height: 300px;
    width: 40%;
    background: grey;
    margin: 15px 00px;
    border-radius: 5px;

    transition: height 0.3s;
    transition: width 0.3s;


    @media(max-width: 350px) {
       width: 80%;
       height: 400px;
       margin: auto;
       margin-top: 15px;
       margin-bottom: 15px;
    }
`