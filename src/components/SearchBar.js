import styled from "styled-components";
import { SearchOutline } from 'react-ionicons';

export default function SearchBar({value, setValue, onclick}){
    return(
        <Searchbar>
        <input placeholder="Escrever para achar você deve!"
                   type='text' value={value}
                   onChange={(e) => setValue(e.target.value)}/>
                    <button>
                    <SearchOutline
                        color={'#D69A44'}
                        height="30px"
                        width="30px"
                        curor="pointer"
                        onClick={onclick}
                    />
                    </button>
        </Searchbar>
    );
}


const Searchbar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;


    input{
        width: 80%;
        border-radius: 10px  0 0 10px;
        background: rgba(255, 255, 255, 0.2);
        height: 35px;
    }
    input:focus {
        border-right: none;
    }



    button{
        width: 50px;
        height: 35px;
        background: #0d1f49;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        border-radius: 0px  10px 10px 0px;
    }


`