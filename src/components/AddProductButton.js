import styled from 'styled-components';
import '../css/product-style.css';

export default function AddProductButton({text, pressAdd, pressSub}){
    return(
        <div className='add-product'>
                <ion-icon onClick={pressSub} name="remove-circle-outline"></ion-icon>
                <h3>{text}</h3>
                <ion-icon onClick={pressAdd} className="add-button" name="add-circle-outline" ></ion-icon>
        </div>
    )
}

const AddProduct = styled.div`
    margin-right: 5px;
    border: none;
    display: flex;
    align-items: center;
    min-width: 30%;
    justify-content: space-between;

    h3{
        color: white;
        font-size: 15px;
    }

    ion-icon{
        cursor: pointer;
        font-size: 35px;
        color: #D49943;
    }

`