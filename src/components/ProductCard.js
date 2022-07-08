import styled from 'styled-components';
import AddProductButton from './AddProductButton';
import { useState, useContext } from "react";
import Context from '../Context';
export default function ProductCard({src, title, price, quantity, add, remove, mark}){
    const {totalOfProducts, setTotalOfProducts} = useContext(Context);
    const [itemQuantity, setItemQuantity] = useState(0);
    function addItem(){
        setItemQuantity(itemQuantity+1);
        setTotalOfProducts(totalOfProducts+1);
    }
    function removeItem(){
        if (itemQuantity > 0){
            setItemQuantity(itemQuantity-1);
            setTotalOfProducts(totalOfProducts-1);            
        }

    }
    return(
        <Productcard>
            <div className='image-container'>
                 <img src={src} alt=''/>
                 <BookMark onClick={mark}>
                    <ion-icon name="bookmark-outline"></ion-icon>
                 </BookMark>
            </div>
           
            <span>
                <p>{title}</p>
                <div className='separate-div'>
                    <h2>R$ {price}</h2>
                    <AddProductButton text={itemQuantity} pressAdd={addItem} pressSub={removeItem}/>

                </div>                
            </span>

        </Productcard>
    );
}

const Productcard = styled.div`
    height: 350px;
    width: 45%;
    background: #202124;
    margin: 15px 00px;
    border-radius: 5px;

    transition: height 0.5s;
    transition: width 0.5s;
    transition: border 0.3s;


    @media(max-width: 350px) {
       width: 80%;
       height: 400px;
       margin: auto;
       margin-top: 15px;
       margin-bottom: 15px;
    }
    .image-container{
        width: 100%;
        height: 65%;
        position: relative;
       
    }

    img{
        width: 100%;
        height: 100%;
        border-radius: 5px 5px 0 0;
        object-fit: cover;
        cursor: pointer;



    }

    p{
        color: white;
        font-size: 13px;
        margin-top: 5px;
        margin-left: 10px;
        margin-right: 2px;
        letter-spacing: 1.5px;
        line-height: 140%;
        overflow: hidden;
        
    }

    span{
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .separate-div{
        border-top: solid 1px #3C4043;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            letter-spacing: -0.12em;
            color: #ECECEC;
            margin-left: 5px;
            font-weight: 700;
        }
    }



`

const BookMark = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: black;
    color: #8A8A8A;
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`