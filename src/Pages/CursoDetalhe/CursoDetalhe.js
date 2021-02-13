import React, { Component } from 'react'

import './CursoDetalhe.css'
import cursoImg from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'



export default class CursoDetalhe extends Component {
  state = {
    curso: []
  };


  async componentDidMount() {
    this.setState({
      curso: this.props.location.state
    })

  }

  descontoCurso(preco) {
    return (parseFloat(preco) + (parseFloat(preco) * 40 / 100)).toFixed(2)
  }


  render() {
    const { curso } = this.state;

    return (

      <div id="detalheContainer">
        <h2>{curso.nomeCurso}</h2>

        <div id="detaiBoard">

          <img src={curso.thumb} />
          {curso.conteudoCurso}
          <div className="alignPrice">

            <div id="detailPriceRed">
              <s>De: R$ {this.descontoCurso(curso.preco)}</s>

            </div>
            <div id="detailPrice">
              Por:  R$ {curso.preco}

            </div>


          </div>

          <p><strong>Imperdível não é mesmo? </strong>

          Clique no botão abaixo para efetuar sua compra.</p>


          <div className="alignPrice">

            <div id="comprarAgora">
              Comprar
             </div>

          </div>

        </div>

      </div>
    )
  }
}
