import React, {useState, useEffect} from 'react'

import './InverteTexto.css'

export default function InverteTexto(){

    const [texto, setTexto] = useState("")

    const [copiado, setCopiado] = useState("Copiar")
    


function inverteTexto (){
  setCopiado("Copiar")
  setTexto(texto.split("").reverse().join(""))

}

function copiarTextoTinvertido () {

  setCopiado("Copiado")
  navigator.clipboard.writeText(texto)

}



    return(
        <div id="inverteContent">
        <h3>Inversor de Texto</h3>

        <div id="meuFormInverte">
          <form >
            <label>
              <input type="text" id="inverte" placeholder='Texto a ser invertido' name="inverte" onChange={e => setTexto(e.target.value)} value={texto}/>
              <button type="button" onClick={inverteTexto}>Inverter</button>
              <button type="button" onClick={copiarTextoTinvertido}>{copiado}</button>

            </label>

          </form>
        </div>
      </div >)
}