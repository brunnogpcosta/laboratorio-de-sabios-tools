import React, { useEffect, useState } from "react";

import './Descricao.css'

import dados from '../../mock/Mock.json'


export default function Descricao({ passaDescricao }) {

    const [descricao, setDescricao] = useState("")

    useEffect(() => {
        pegaDescricao(passaDescricao)

    }, []);

    function pegaDescricao(value) {

        if(value == null){
            setDescricao("")
        }else{
            const descricaoFiltrada = dados.ferramentas.filter(dd => dd.id == value)
            const soDescricao = descricaoFiltrada[0].descricao
    
            setDescricao(soDescricao)

      
        }
  
    }

    return (
        <div id="descricao-component">
            <h4>{descricao}</h4>
        </div>

    )
}