import React, { useState } from 'react'

import './CodigoCores.css'
import Descricao from "../../../components/Descricao/Descricao";


export default function CodigoCores() {

  const [hex, setHex] = useState("#000")
  const [rgb, setRgb] = useState("rgb(0, 0, 0)")



  function setarCor(infos) {
    //console.log(infos)

    const r = parseInt(infos.substr(1, 2), 16)
    const g = parseInt(infos.substr(3, 2), 16)
    const b = parseInt(infos.substr(5, 2), 16)
    const rgb = `rgb(${r}, ${g}, ${b})`


    setHex(infos)
    setRgb(rgb)

  }



  return (
    <div id="coresContent">
      <h3>Código de Cores</h3>
      <Descricao passaDescricao = "13837486-10ce-4f1f-8575-669ae380bf2c"></Descricao>
      

      <form >
        <label for="color">Escolha uma cor:
            <input type="color" id="color" name="color" onChange={e => setarCor(e.target.value)} />

        </label>

        <div id="cores">

          <div className="cor1">
            <div className="cor1-1" style={{ backgroundColor: hex }}>

            </div>
          </div>


          <div className="cor3">

            <label for="hex">Hexadecimal: <br />
              <input type="text" id="hex" name="hex" value={hex} /> <br />
            </label>

            <label for="hrb">RGB: <br />
              <input type="text" id="rgb" name="rgb" value={rgb} /> <br />
            </label>

          </div>

        </div>
      </form>
    </div >)
}
