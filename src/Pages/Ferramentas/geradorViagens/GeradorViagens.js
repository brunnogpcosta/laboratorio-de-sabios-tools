import React, { useState, useEffect } from 'react'

import api from '../../../services/api';

import './GeradorViagens.css'

import travel from '../../../assets/img/travel.jpg'
import Descricao from '../../../components/Descricao/Descricao';

export default function GeradorViagens() {

    const [selectedContinente, setSelectedContinente] = useState("Todos");

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState({});
    const [sorteado, setSorteado] = useState(false);


    useEffect(() => {
        api
            .get()
            .then((response) => setCountries(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });



    }, []);

    //console.log(countries)

    function sortearPais() {

        let filtro = []

        setSorteado(false)
        try {
            console.log(selectedContinente)
            if (selectedContinente == "Todos") {
                filtro = countries
            } else {
                filtro = countries.filter(pais => pais.localizacao.regiao.nome == selectedContinente)
            }

            // console.log(filtro)
            const numeroPais = Math.round(Math.random() * (filtro.length - 0) + 0);
            //console.log(numeroPais)
            const sorteio = filtro[numeroPais]
            //console.log(filtro.length)

            setCountry(sorteio)

            //console.log(sorteio)
            sorteio.hasOwnProperty('nome')

            setSorteado(true)




        } catch (e) {
            console.log("error: " + e.error)
        }

    }





    return (
        <div id="gerador-viagens-content">
            <h3>Gerador de Viagens</h3>
            <Descricao passaDescricao="255989f7-1ef2-494b-b071-1ec05ea443d2"></Descricao>



            <div id='painel-viagens'>
                <div id="painel-viagens-esquerda">
                    <label>
                        Escolha o Continente
                        <select name="select" value={selectedContinente} onChange={e => setSelectedContinente(e.target.value)}>
                            <option value="Todos">Todos</option>
                            <option value="Am??rica">Am??rica</option>
                            <option value="Europa">Europa</option>
                            <option value="??frica">??frica</option>
                            <option value="??sia">??sia</option>
                            <option value="Oceania">Oceania</option>
                        </select>

                    </label>


                    <button onClick={sortearPais}>Sortear Pa??s</button>

                </div>

                <div id="painel-viagens-direita">
                    {sorteado ?

                        <div>
                            <h3>{country.nome.abreviado}</h3>


                            <div className='painel-viagens-direita-detalhes'>

                                <p><b>??rea: </b>{country.area.total} {country.area.unidade.s??mbolo}</p>
                                <p><b>Capital: </b>{country.governo.capital.nome}</p>
                                <p><b>Idioma Principal: </b>{country.linguas[0].nome}</p>

                                <p><b>Continente: </b>{country.localizacao.regiao.nome}</p>
                                <p><b>Moeda: </b>{country["unidades-monetarias"][0].nome}</p>

                            </div>

                            <p><b>Hist??rico: </b>{country.historico} </p>


                        </div>
                        :
                        <div>

                            <a href='https://www.freepik.com/vectors/travel'><img src={travel} alt="Logo" /></a>
                        </div>



                    }

                </div>
            </div>


        </div>
    )

}