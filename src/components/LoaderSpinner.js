import {ThreeDots, Oval } from  'react-loader-spinner'
import styled from 'styled-components';


export default function LoaderSpinner({loaderType}){
    return(
        !loaderType ?
        <ThreeDots 
            height="70"
            width="70"
            color='#07203D'
            ariaLabel='loading'
            
        />
        :
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
    min-height: 100vh;
    align-items: center;
`