import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import api from '../../services/api'

import './Trilha.css'

import RightContent from '../../components/RightContent/RightContentComponent'

export default class Trilha extends Component {
  state = {
    trilhas: [],
  }

  async componentDidMount() {
    const response = await api.get('trails')

    this.setState({
      trilhas: response.data
    })

  }

  render() {
    const { trilhas } = this.state
    const msg = "Um dos motivos da procrastinação é enxergar um grande desafio como um todo. E se ao invés de enxergarmos nossa meta de forma geral, a reduzissemos a pequenos pedaços, ou seja, micro metas?" + "Esse é o intuito de nossas trilhas, ao inves de você pensar quão longe está do seu objetivo, você pensa o quanto você evoluiu."
    return (
      <div id="trilhaContent">

        <div className="trilhaContainer">
          <h2>Trilha do Sucesso</h2>

          <div id="trilhaObjetivo">
            <h4>Escolha seu Objetivo:</h4>
            <ul>
              {trilhas.map(trilha => (
                <li><Link to={{
                  pathname: '/trilhaCompleta',
                  state: {
                    categoria: trilha,
                  }
                }}>Sábio {trilha}</Link></li>
              ))}

            </ul>


          </div>
        </div>

        <RightContent mensagem={msg}></RightContent>
      </div>
    )
  }
}
