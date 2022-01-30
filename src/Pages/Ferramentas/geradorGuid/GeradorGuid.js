import React, { Component } from 'react'

import './GeradorGuid.css';



export default class GeradorGuid extends Component {

  state = {
    guid: crypto.randomUUID()
  }
  geraGuid() {
    console.log("clicou")
    const codigo = crypto.randomUUID()
    this.setState({ guid: codigo })
  }


  render() {
    const { guid } = this.state

    return (
      <div id="guidContent">
        <h3>Gerador de GUID</h3>

        <div id="meuForm">
          <form >
            <label for="guid">
              <input type="text" id="guid" name="guid" value={guid} />
              <button type="button" onClick={() => this.geraGuid()}>Atualizar</button>

            </label>

          </form>
        </div>
      </div >)
  }

}