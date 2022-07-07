import styled from 'styled-components';

const SuggestionsArea = styled.div`
    height: 35px;
    width: 100%;
    background: #D69A44;
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
    
    button{
     
        border: none;
        background: transparent;
        color: white;
        font-weight: 700;
        font-size: 17px;
        cursor: pointer;
        transition: font-size 0.2s;

        &:hover{
       
            font-size: 20px;

    }

    }
`
export default SuggestionsArea;