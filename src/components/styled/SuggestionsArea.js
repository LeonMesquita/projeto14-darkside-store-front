import styled from 'styled-components';

const SuggestionsArea = styled.div`
    height: 50px;
    width: 100%;
    background: #FCCB6F;
    display: flex;

    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    
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
`
export default SuggestionsArea;