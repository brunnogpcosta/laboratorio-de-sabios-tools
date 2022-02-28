import React, {useState, useEffect} from 'react'
import Descricao from '../../../components/Descricao/Descricao'

import './InverteTexto.css'

export default function InverteTexto(){

    const [texto, setTexto] = useState("")

    const [copiado, setCopiado] = useState("Copiar")

    const [corBotao, setcorBotao] = useState("#efefef")
    const [corFonte, setCorFonte] = useState("#000")
    


function inverteTexto (){
  setCorFonte("#000")
  setCopiado("Copiar")
  setcorBotao("#efefef")
  setTexto(texto.split("").reverse().join(""))

}

function copiarTextoTinvertido () {
  setcorBotao("#31a06c")
  setCorFonte("#fff")
  setCopiado("Copiado")
  navigator.clipboard.writeText(texto)

}



    return(
        <div id="inverteContent">
        <h3>Inversor de Texto</h3>
        <Descricao passaDescricao="f5e51f0d-48fd-4fc0-a29f-4ee9f5ca6b93"></Descricao>

        <div id="meuFormInverte">
          <form >
            <label>
              <input type="text" id="inverte" placeholder='Texto a ser invertido' name="inverte" onChange={e => setTexto(e.target.value)} value={texto}/>
              <button type="button" onClick={inverteTexto}>Inverter</button>
              <button type="button" style={{ background: corBotao, border:'1px solid #767676',color: corFonte }} onClick={copiarTextoTinvertido}>{copiado}</button>

            </label>

          </form>
        </div>
      </div >)
}