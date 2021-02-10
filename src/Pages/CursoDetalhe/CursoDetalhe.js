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


  tratarTexto() {
    const { curso } = this.state;
    console.log(curso.descricaoCurso)
    return curso.descricaoCurso

  }


  render() {
    const { curso } = this.state;

    return (

      <div id="detalheContainer">
        <h2>{curso.nomeCurso}</h2>

        <div id="detaiBoard">

          <img src={cursoImg} />
          {this.tratarTexto()}
          <div className="alignPrice">
            <div id="detailPrice">
              R$ {curso.preco}

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
