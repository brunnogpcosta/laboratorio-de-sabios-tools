import React, { Component } from 'react'

import './CursoDetalhe.css'

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

        <div id="titleDetalhe">
          <h2>{curso.nomeCurso}</h2>
          <h3>({curso.formato})</h3>

        </div>


        <div id="detaiBoard" >
          <img src={curso.thumb} alt={`imagem do curso ${curso.nomeCurso}`} />

          <div className="msg-wrapper ">
            {this.tratarTexto(curso.conteudoCurso)}



            <br /><br /><br />

            <div id="containerSaibaMais">
              <a className="saibaMais" href={curso.divulgacao} target="_blank">Leia Mais</a>

            </div>


          </div>

          <div className="alignPrice">
            <div id="detailPriceRed">
              <s>De: R$ {this.descontoCurso(curso.preco)}</s>
            </div>

            <div id="detailPrice">
              Por:  R$ {curso.preco}
            </div>
          </div>
        </div>

        <div className="parceleCredito">
          Parcele em até 12 vezes no cartão de crédito. *
        </div>


        <div className="formasPagamento">

          <img src={formaP} alt="imagem formas de pagamento" />
        </div>

        <p><strong>Imperdível não é mesmo? </strong>
          Clique no botão abaixo para efetuar sua compra.</p>

        <div className="alignPrice">
          <div id="comprarAgora">
            <a href={curso.pagamento} target="_blank" rel="noreferrer" > Comprar</a>
          </div>
        </div>

        <small>* A quantidade de parcelas varia de acordo com o valor do produto.</small>
      </div>
    )
  }
}
