import React, { Component } from 'react'

import './CursoDetalhe.css'
import cursoImg from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import formaP from './img/formas_pgamento.jpg'


export default class CursoDetalhe extends Component {
  state = {
    curso: []
  };


  async componentDidMount() {
    this.setState({
      curso: this.props.location.state
    })

  }


  tratarTexto(texto) {
    const makestring = `${texto}`
    return makestring

    //.replace(". ", ".\n\n");

  }

  descontoCurso(preco) {
    return ((parseFloat(preco) + (parseFloat(preco) * 40 / 100)).toFixed(2)).replace(".", ",")
  }


  render() {
    const { curso } = this.state;

    return (

      <div id="detalheContainer">
        <h2>{curso.nomeCurso}</h2>

        <div id="detaiBoard" >
          <img src={curso.thumb} />

          <div className="msg-wrapper ">
            {this.tratarTexto(curso.conteudoCurso)}
          </div>

          <div className="alignPrice">
            <div id="detailPriceRed">
              <s>De: R$ {this.descontoCurso(curso.preco)}</s>
            </div>

            <div id="detailPrice">
              Por:  R$ {curso.preco}
            </div>
          </div>

          <div className="formasPagamento">
            <img src={formaP} />
          </div>

          <p><strong>Imperdível não é mesmo? </strong>
          Clique no botão abaixo para efetuar sua compra.</p>

          <div className="alignPrice">
            <div id="comprarAgora">
              <a href="https://pay.hotmart.com/W3620259P?lang=pt-BR&sck=HOTMART_PLATFORM&checkoutMode=0&bid=1613230394540" target="_blank"> Comprar</a>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
