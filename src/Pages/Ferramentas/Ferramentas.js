import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Ferramentas.css'

export default class Ferramentas extends Component {
  render() {
    return (
      <div id="container">
        <div id="cursosContentFerramentas">
          <Link to="/geradorDeCV">
            <button className="bt-cv">
              Gerador de Currículo
            </button>
          </Link>
          <Link to="/conversorBinarioDecimal">
            <button className="bt-cv">
              Conversor Binário Decimal
            </button>
          </Link>
          <Link to="/geradorBorda">
            <button className="bt-cv">
              Gerador de Borda HTML
            </button>
          </Link>
          <Link to="/">
            <button className="bt-cv">
              Sorteador
            </button>
          </Link>
          <Link to="/">
            <button className="bt-cv">
              Codigo de Resistores
            </button>
          </Link>
          <Link to="/CodigoCores">
            <button className="bt-cv">
              Código de Cores
            </button>
          </Link>
          <Link to="/">
            <button className="bt-cv">
              Inversor de texto
            </button>
          </Link>
          <Link to="/">
            <button className="bt-cv">
              Critpografador de texto
            </button>
          </Link>
          <Link to="/">
            <button className="bt-cv">
              Gerador GUID
            </button>
          </Link>
        </div>

      </div>
    )
  }
}
