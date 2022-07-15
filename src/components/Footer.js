import styled from 'styled-components';


const Footer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    max-height: 20vh;
    background-image: linear-gradient(to right, #031027, #08203D, #031027);
    padding-top: 20px;
    justify-content: center;
    border-top: solid 1px #F9CA6F;


    div{
        width: 550px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    button {
        width: calc(50% - 20px);
    }

    @media(max-width: 550px){
        width: 100%;
    }
`

export default Footer;