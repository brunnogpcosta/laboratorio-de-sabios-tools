import React, { Component } from 'react'

import './GeradorGuid.css';



export default class GeradorGuid extends Component {

  state = {
    guid: crypto.randomUUID(),
    copiado: "Copiar",
    colorBotao: "#efefef",
    corFonte: "#000"
  }

  geraGuid() {
    //console.log("clicou")
    const codigo = crypto.randomUUID()
    this.setState({ guid: codigo, copiado: "Copiar", colorBotao: "#efefef",  corFonte: "#000"  })
  }


  copiarCampo() {
    navigator.clipboard.writeText(this.state.guid)
    this.setState({ copiado: "Copiado", colorBotao: "#31a06c", corFonte: "#fff" })
 
  }




  render() {
    const { guid, copiado, colorBotao, corFonte } = this.state

    return (
      <div id="guidContent">
        <h3>Gerador de GUID</h3>

        <div id="meuForm">
          <form >
            <label for="guid">
              <input type="text" id="guid" name="guid" value={guid} />
              <button type="button" onClick={() => this.geraGuid()}>Atualizar</button>
              <button type="button"  style={{ background: colorBotao, border:'1px solid #767676',color: corFonte }} onClick={() => this.copiarCampo()}>{copiado}</button>

            </label>

          </form>
        </div>
      </div >)
  }

}