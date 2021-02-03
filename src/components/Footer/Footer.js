import React, { Component } from 'react'
import './FooterStyle.css'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="containerFooter">
          <ul>
            <li>© Copyright 2021 Laboratório de Sábios</li>
            <li><a href="">Informações Importantes</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
