import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import './headerStyle.css'
import logo from './img/logoFabricadeSabios.png'

import menu from './img/menu.svg'



export default class Header extends Component {
  state = {
    meuMenu: false
  }

  constructor(props) {
    super(props);


    this.selecionouMenu = this.selecionouMenu.bind(this);
  }


  componentDidMount() {
    //console.log("Movie", window.location.pathname)
  }


  selecionouMenu() {
    const { meuMenu } = this.state

    if (meuMenu === false) {
      this.setState({ meuMenu: true })

    } else {
      this.setState({ meuMenu: false })

    }
  }


  render() {
    const { meuMenu } = this.state

    return (

      <div className="header no-print">

        <div className="topHeader">
          <div className="container">

            <ul>
              <li><Link to="/"><img src={logo} alt="Logo" /></Link></li>
              <li><Link to="/"><h2>Laboratório de Sábios</h2></Link></li>

              <li className="dropdown">
                <img src={menu} alt="Menu" onClick={this.selecionouMenu} />
                <div className="dropdown-content" style={meuMenu ? { display: 'block' } : { display: 'none' }} >

                  <Link to="/" onClick={this.selecionouMenu}>Ferramentas</Link>
                  <Link to="/info" onClick={this.selecionouMenu}>Dúvidas</Link>
                </div>
              </li>

            </ul>

          </div>
        </div>


        <div className="bottomHeader">
          <div className="container">
            <ul>
              <div className="bhLeft">
                <li><Link to="/">FERRAMENTAS</Link></li>
              </div>

              <div className="bhRight">

                <li><Link to="/info">DÚVIDAS</Link></li>

              </div>
            </ul>
          </div>
        </div>
      </div >
    )
  }
}
