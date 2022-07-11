import styled from 'styled-components';


const Footer = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 550px;
    justify-content: space-evenly;
    flex-wrap: wrap;

    button {
        width: calc(50% - 20px);
    }

    @media(max-width: 550px){
        width: 100%;
    }
`

export default Footer;