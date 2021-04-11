import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Ferramentas.css'

export default class Ferramentas extends Component {
  render() {
    return (
      <div id="container">

        <div id="titleContent">
          <h2> Ferramentas</h2>
        </div>

        <div id="cursosContentFerramentas">
        <Link to="/geradorDeCV">
          <button className="bt-cv">
           
              Gerador de Currículo
         
          </button>
          </Link>


        </div>

      </div>
    )
  }
}
