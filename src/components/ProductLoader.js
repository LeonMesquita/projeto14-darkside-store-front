import {ThreeDots, Oval } from  'react-loader-spinner'
import styled from 'styled-components';


export default function ProductLoader({loaderType}){
    return(
        <Loader>
        <Oval 
        height="100"
        width="100"
        color='#FCCB6F'
        secondaryColor='grey'
        ariaLabel='loading'
        />
        </Loader>
    

    );
}
//#00BFFF
const Loader = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    background: #133760;

`