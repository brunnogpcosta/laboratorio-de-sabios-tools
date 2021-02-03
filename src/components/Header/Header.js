import React, { Component } from 'react'

import './headerStyle.css'
import logo from './img/logoFabricadeSabios.png'
import menu from './img/menu.svg'

export default class Header extends Component {
  render() {
    return (
      <div className="header">

        <div className="topHeader">
          <div className="container">
            <ul>
              <li><a href="#"><img src={logo} alt="Logo" /></a></li>
              <li><h2>Laboratório de Sábios</h2></li>
              <li><a href="#"><img src={menu} alt="Menu" /></a></li>
            </ul>
          </div>
        </div>


        <div className="bottomHeader">
          <div className="container">
            <ul>
              <div className="bhLeft">
                <li><a href="#">POPULARES</a></li>
                <li><a href="#">PREÇO BAIXO</a></li>
              </div>

              <div className="bhRight">
                <li><a href="#">PESQUISA</a></li>
                <li><a href="#">TRILHA</a></li>
                <li><a href="#">RANKING</a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
