import React, { Component } from 'react'
import './Info.css'

export default class Info extends Component {
  render() {
    return (
      <div className="infoContent">
        <h2>Informações do Site</h2>

        <p>O site <strong>Laboratório dos Sábios</strong> disponibiliza cursos de terceiros que são produções independente e de responsabilidade de seus idealizadores.</p>

        <p>Todas as informações dos cursos estão disóníveis para consulta, cabendo ao usuário análisar e tirar o melhor proveito dos cursos apresentados.</p>
        <br />

        <h3>Contato</h3>
        <p>Qualquer dúvida em relação ao funcionamento do site, pode ser esclarecida através do email <strong>john.dee@email.com</strong></p>
      </div>
    )
  }
}
