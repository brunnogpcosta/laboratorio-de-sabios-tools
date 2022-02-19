import React, { Component } from 'react'
import './FooterStyle.css'

import insta from './img/instagram.svg'

export default class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="containerFooter no-print">
          <ul>
            <li>© Copyright 2021 - 2022 | Laboratório de Sábios</li>
            <li><a href="https://www.instagram.com/laboratoriodesabios/" target="_blank" rel="noreferrer"><img src={insta} alt="instagram" title="instagram" /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}
