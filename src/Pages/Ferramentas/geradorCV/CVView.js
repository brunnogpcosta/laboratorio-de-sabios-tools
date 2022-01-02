import React, { Component } from 'react'

import "./CVView.css"

export default class CVView extends Component {
  state = {
    cv: this.props.location.state
  };

  async componentDidMount() {
    window.scrollTo(0, 0)
    console.log(this.props.location.state)
  }


  imprivirCv() {
    window.print()
  }



  render() {
    const { cv } = this.state

    return (
      <div id="containerCV">

        <div id="headerCV">
          <h1>{cv.nome}</h1>
          <p>{cv.nacionalidade}, {cv.estadoCivil}, {cv.idade} anos</p>
          <p>{cv.endereco}</p>
          <p>CEL: {cv.telefone} || E-mail: {cv.email}</p>
        </div>


        <div id="objective">
          <h2>Objetivo</h2>
          <p>{cv.objetivo}</p>

        </div>


        <div id="formation">
          <h2>Formação</h2>

          <ul>
            {cv.formacao.map(escola =>
              <li>{escola}</li>
            )}
          </ul>

        </div>


        <div id="courses">
          <h2>Cursos e Conhecimentos</h2>

          <ul>
            {cv.cursos.map(crs =>
              <li>{crs}</li>
            )}
          </ul>
        </div>

        <div id="experience">
          <h2>Experiência Profissional</h2>
          <ul>

            {cv.experiencia.map(exp =>
              <li>
                <p><b>{exp.empresa} [{exp.anoInicio} - {exp.anoFim}]</b></p>
                <p><b>Cargo: </b>{exp.cargo}</p>
                <p><b>Principais Atividades: </b>{exp.expe}</p>
              </li>
            )}
          </ul>
        </div>


        <div id="about">

          <h2>Sobre Mim</h2>
          <p>{cv.sobreMim}</p>


        </div>

        <form id="formCv" className="no-print">
          <input type="button" value="Imprimir" onClick={() => this.imprivirCv()} />
        </form>
      </div>
    )
  }
}
