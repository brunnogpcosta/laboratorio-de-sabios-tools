import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './headerStyle.css'
import logo from './img/logoFabricadeSabios.png'
import alert from './img/alert-circle.svg'



export default class Header extends Component {
  render() {
    return (

      <div className="header">

        <div className="topHeader">
          <div className="container">

            <ul>
              <li><Link to="/"><img src={logo} alt="Logo" /></Link></li>
              <li><h2>Laboratório de Sábios</h2></li>
              <li><Link to="/ranking" title="Informações Importantes"><img src={alert} alt="Informação Importante" /></Link></li>
            </ul>

          </div>
        </div>


        <div className="bottomHeader">
          <div className="container">
            <ul>
              <div className="bhLeft">
                <li><Link to="/populares">POPULARES</Link></li>
                <li><Link to="/barato">PREÇO BAIXO</Link></li>
              </div>

              <div className="bhRight">
                <li><Link to="/trilha">TRILHA</Link></li>
                <li><Link to="/ranking">RANKING</Link></li>
                <li><Link to="/pesquisa">PESQUISA</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
