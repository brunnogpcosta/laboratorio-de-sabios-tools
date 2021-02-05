import React, { Component } from 'react'

import './MelhorEmailSpam.css'

export default class MelhorEmailSpam extends Component {
  render() {
    return (
      <div className="melhorEmail">
        <div className="melhorEmailTexto">
          <h3>Oportunidade Única!</h3>
          <p>
            Se você quer receber descontos imperdíveis, nos deixe seu melhor e-mail.
            </p>

          <input type="email" placeholder="fulano@email.com" />

          <div id="botoesEmail">
            <button>Quero Desconto</button>
            <button>Não Gosto de Desconto</button>
          </div>


        </div>
      </div>
    )
  }
}
