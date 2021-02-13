import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './headerStyle.css'
import logo from './img/logoFabricadeSabios.png'
import alert from './img/alert-circle.svg'
import menu from './img/menu.svg'



export default class Header extends Component {
  render() {
    return (

      <div className="header">

        <div className="topHeader">
          <div className="container">

            <ul>
              <li><Link to="/"><img src={logo} alt="Logo" /></Link></li>
              <li><h2>Laboratório de Sábios</h2></li>

              <li className="dropdown">
                <img src={menu} alt="Menu" className="dropbtn" />
                <div class="dropdown-content">
                  <Link to="/satisfacao">Satisfação</Link>
                  <Link to="/barato">Preço Baixo</Link>
                  <Link to="/trilha">Trilha</Link>
                  <Link to="/pesquisa">Pesquisar</Link>
                  <Link to="/info">Dúvidas</Link>
                </div>
              </li>

            </ul>

          </div>
        </div>


        <div className="bottomHeader">
          <div className="container">
            <ul>
              <div className="bhLeft">
                <li><Link to="/satisfacao">SATISFAÇÃO</Link></li>
                <li><Link to="/barato">PREÇO BAIXO</Link></li>
              </div>

              <div className="bhRight">
                <li><Link to="/trilha">TRILHA</Link></li>
                <li><Link to="/pesquisa">PESQUISAR</Link></li>
                <li><Link to="/info">DÚVIDAS</Link></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
