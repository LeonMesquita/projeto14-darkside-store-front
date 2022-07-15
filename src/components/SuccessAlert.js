import styled from 'styled-components';


export default function SuccessAlert({message, onclick, image}){
    return(
        <Dialog>
            <div>
                <h3>{message}</h3>
                <img src={image} alt=''/>
            <span>
                <button onClick={onclick}>Voltar para Home</button>

            </span>

            </div>

        </Dialog>
    );
}


const Dialog = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #03223F;
        width: 80%;
        height: 40%;
        border-radius: 20px;
        max-width: 500px;
        max-height: 500px;
        justify-content: space-between;

    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-bottom: 20px;

    }

    button{
        width: 60%;
        height: 50px;
        background-color: #FCCB6F;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        color: #1E1E1E;
        font-weight: 900;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 25px;
    }

    h3{
        text-align: center;
        margin-top: 50px;
        font-family: 'Roboto',sans-serif;
        font-weight: normal;
        color: white;
        font-size: 23px;
    }

    img{
        height: 35%;
        border-radius: 15px;
    }

`