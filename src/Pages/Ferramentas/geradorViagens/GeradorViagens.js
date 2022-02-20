import React, {useState, useEffect} from 'react'

import api from '../../../services/api';

import './GeradorViagens.css'

import travel from '../../../assets/img/travel.jpg'

export default function GeradorViagens(){

const [selectedContinente, setSelectedContinente] = useState("Todos");

const [countries,setCountries] = useState([]);
const [country,setCountry] = useState({});
const [sorteado,setSorteado] = useState(false);


    useEffect(() => {
        api
          .get()
          .then((response) => setCountries(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });


         
      }, []);
    
      //console.log(countries)
    
function sortearPais(){

    let filtro = []

    setSorteado(false)
try{

    if(selectedContinente == "Todos"){
        filtro = countries
    }else{
        filtro =  countries.filter(pais => pais.localizacao.regiao.nome == selectedContinente)
    }
      
       // console.log(filtro)
        const numeroPais = Math.round(Math.random() * (filtro.length - 0) + 0);
        //console.log(numeroPais)
        const sorteio =  filtro[numeroPais] 
        //console.log(filtro.length)

        setCountry(sorteio)

        //console.log(sorteio)
       //console.log(sorteio.hasOwnProperty('nome'))

    setSorteado(true)

 
    

}catch(e){
console.log("error: " + e.error)
}

}





return(
    <div id="gerador-viagens-content">
       <h3>Gerador de Viagens</h3>
    
    
    
    <div id='painel-viagens'>
    <div id="painel-viagens-esquerda">
        <label>
            Escolha o Continente
        <select name="select"  value={selectedContinente} onChange={e => setSelectedContinente(e.target.value)}>
        <option value="" selected>Todos</option>
            <option value="América">América</option>
            <option value="Europa">Europa</option>
            <option value="África">África</option>
            <option value="Ásia">Ásia</option>
            <option value="Oceania">Oceania</option>
        </select>
       
        </label>
        

        <button onClick={sortearPais}>Sortear País</button>

    </div>

    <div id="painel-viagens-direita">
    { sorteado?

        <div>
            <h3>{country.nome.abreviado}</h3>

           
            <table>
                <tbody>
                <tr>
                    <td><b>Área: </b>{country.area.total} {country.area.unidade.símbolo}</td>    
                    <td><b>Capital: </b>{country.governo.capital.nome}</td>    
                    <td><b>Idioma Principal: </b>{country.linguas[0].nome}</td>    
                </tr>    
                <tr>
                    <td><b>Continente: </b>{country.localizacao.regiao.nome}</td>    
                    <td><b>Moeda: </b>{country["unidades-monetarias"][0].nome}</td>    
                </tr>  
                </tbody>
            </table>

            <p><b>Histórico:</b> {country.historico} </p>


        </div>
:
    <div>

     <img src={travel} alt="Logo" />
    </div>
    
   
    
    }

    </div>
    </div>
    
    
    </div>
)

}