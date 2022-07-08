import styled from 'styled-components';

const SuggestionsArea = styled.div`
    height: 50px;
    width: 100%;
    background: #FCCB6F; 
    button{
     
        border: none;
        background: transparent;
        color: #03223F;
        font-weight: 700;
        font-size: 17px;
        cursor: pointer;
        transition: font-size 0.2s;
        &:hover{
       
            font-size: 20px;
            text-decoration: underline;

    }

    }

    div{
        height: 100%;
        max-width: 550px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        overflow: hidden;
        margin: auto;
        
    }
    
    @media(max-width: 400px) {
        h5{
            font-size: 13px;
        }
    }
`
export default SuggestionsArea;