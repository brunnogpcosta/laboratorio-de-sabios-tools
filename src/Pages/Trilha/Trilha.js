import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Trilha.css'

import RightContent from '../../components/RightContent/RightContentComponent'

export default class Trilha extends Component {
  render() {
    return (
      <div id="trilhaContent">

        <div className="trilhaContainer">
          <h2>Trilha do Sucesso</h2>

          <div id="trilhaObjetivo">
            <h4>Escolha seu Objetivo:</h4>
            <ul>
              <li><Link to="/trilhaCompleta">Sábio Marketeiro</Link></li>
              <li><Link to="/trilhaCompleta">Sábio da Psicologia</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Sarado</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Estóico</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Programador</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Músico</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Marketeiro</Link></li>
              <li><Link to="/trilhaCompleta">Sábio da Psicologia</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Sarado</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Estóico</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Programador</Link></li>
              <li><Link to="/trilhaCompleta">Sábio Músico</Link></li>
            </ul>


          </div>
        </div>

        <RightContent />
      </div>
    )
  }
}
