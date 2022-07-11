import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {Inputs, FormCheckout} from '../FormStyles'; 
import ContextCheckout from "../../ContextCheckout";

export default function AddressPage(){

    const navigate = useNavigate();

    const { adress, setAdress, city, setCity, state, setState, CEP, setCEP } = useContext(ContextCheckout);

    useEffect(() => {
        setAdress("");
        setCity("");
        setState("");
        setCEP("");
    }, []);

    return (
        <FormCheckout onSubmit={() => navigate("/checkout")}>
            <h1>Endereço da entrega</h1>

            <Inputs>
                <label for="adress">Endereço: </label>
                <input id="adress" type="text" placeholder="Seu endereço..." value={adress} onChange={e => setAdress(e.target.value)} required />
            </Inputs>
            <Inputs>
                <label for="city">Cidade: </label>
                <input id="city" type="text" placeholder="Sua cidade..." value={city} onChange={e => setCity(e.target.value)} required />
            </Inputs>
            <Inputs>
                <label for="state">Estado: </label>
                <select id="state" name="state" value={state} onChange={e => setState(e.target.value)}>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    <option value="EX">Estrangeiro</option>
                </select>
            </Inputs>
            <Inputs>
                <label for="CEP">CEP: </label>
                <input id="CEP" type="text" placeholder="Seu CEP..." value={CEP} onChange={e => setCEP(e.target.value)} required />
            </Inputs>

            <hr></hr>

            
            <button type='submit'>Confirmar Endereço</button>
        </FormCheckout>
    );
}


/*


*/


