import styled from 'styled-components';

export default function NavBar(){
    return(
        <>
            <Navbar>
                <div>
                    <h6>img logo</h6>
                    <p>Olá, Stormtrooper</p>                
                </div>

                <button>carr</button>
    
            </Navbar> 
            <div className='sized-box'></div>       
        </>

    );
}

const Navbar = styled.div`
    width: 100%;
    height: 90px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;


    p{
        color: #F5C974;
        margin-left: 10px;
        font-weight: 400;
        font-size: 20px;
    }

    button{
        border-radius: 50%;
        margin-right: 10px;
    }

    div{
        display: flex;
    }

`