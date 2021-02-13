import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './Satisfacao.css'

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'

import RightContent from '../../components/RightContent/RightContentComponent'
export default class Satisfacao extends Component {
  state = {
    cursos: [],

  }

  async componentDidMount() {
    const response = await api.get('http://localhost:3001/allCourses')
    this.setState({
      cursos: response.data.cursos.sort((b, a) => (parseFloat(a.satisfacao) > parseFloat(b.satisfacao)) ? 1 : -1)
    })

  }

  saberCor(satisfacao) {
    if (satisfacao >= 4) {
      return "green";
    }
    if (satisfacao < 4 && satisfacao > 3) {
      return "orange";
    }
    if (satisfacao < 3 && satisfacao > 2) {
      return "darkyellow";
    }
  }


  render() {
    const { cursos } = this.state
    const msg = "Esta página ordena os cursos de acordo com a pontuação atual, sendo 0 (Zero) a menor e 5 (Cinco) a maior."
    return (

      <div id="satisfacaoContainer">
        <h2>Satisfação</h2>


        <div className="satisfacaoCursosContent">

          {cursos.map(curso => (
            <Link to={{
              pathname: '/detalhe',
              state: {
                nomeCurso: curso.nomeCurso,
                conteudoCurso: curso.conteudoCurso,
                preco: curso.preco,
                thumb: curso.thumb
              }
            }} >
              <figure>
                <div style={{ color: this.saberCor(curso.satisfacao) }} className="positionCourse">{curso.satisfacao}</div>
                <img src={curso.thumb}></img>
                <figcaption Title={curso.nomeCurso}>
                  {curso.nomeCurso}
                </figcaption>
              </figure>
            </Link>
          ))}

        </div>


        <RightContent mensagem={msg} />
      </div>
    )
  }
}
