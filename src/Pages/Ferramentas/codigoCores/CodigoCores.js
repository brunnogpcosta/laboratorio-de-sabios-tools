import React, { Component } from 'react'

import './CodigoCores.css'


export default class CodigoCores extends Component {
  render() {
    return (
      <div id="coresContent">
        <h3>Código de Cores</h3>

        <form >
          <label for="color">Escolha uma cor:
            <input type="color" id="color" name="color" />

          </label>

        </form>
      </div>)
  }
}