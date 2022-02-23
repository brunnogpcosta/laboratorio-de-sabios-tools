import React, { Component } from 'react'

import './GeradorGuid.css';



export default class GeradorGuid extends Component {

  state = {
    guid: crypto.randomUUID(),
    copiado: "Copiar"
  }

  geraGuid() {
    //console.log("clicou")
    const codigo = crypto.randomUUID()
    this.setState({ guid: codigo, copiado: "Copiar" })
  }


  copiarCampo() {
    navigator.clipboard.writeText(this.state.guid)
    this.setState({ copiado: "Copiado" })
 
  }




  render() {
    const { guid, copiado } = this.state

    return (
      <div id="guidContent">
        <h3>Gerador de GUID</h3>

        <div id="meuForm">
          <form >
            <label for="guid">
              <input type="text" id="guid" name="guid" value={guid} />
              <button type="button" onClick={() => this.geraGuid()}>Atualizar</button>
              <button type="button" onClick={() => this.copiarCampo()}>{copiado}</button>

            </label>

          </form>
        </div>
      </div >)
  }

}