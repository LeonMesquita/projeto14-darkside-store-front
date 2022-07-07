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
                        height="45px"
                        width="45px"
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

    input{
        width: 80%;

        border-radius: 10px  0 0 10px;
    }
    input:focus {
        border-right: none;
    }

    button{
        width: 50px;
        height: 50px;
        background: #0d1f49;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        border-radius: 0px  10px 10px 0px;
    }


`