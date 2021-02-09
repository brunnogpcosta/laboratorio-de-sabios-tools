import React, { Component } from 'react'

import api from '../../services/api'

import './Baratos.css';

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import RightContent from '../../components/RightContent/RightContentComponent'

export default class Baratos extends Component {
  state = {
    cursosBaratos: [],
  }

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/allCourses')
    const objetoOrdenado = response.data.cursos.sort((a, b) => (parseFloat(a.preco) > parseFloat(b.preco)) ? 1 : -1)

    console.log(objetoOrdenado)
    this.setState({
      cursosBaratos: objetoOrdenado
    })

  }


  render() {

    const { cursosBaratos } = this.state

    return (
      <div id="baratosContainer">
        <h2>Mais Baratos</h2>

        <div className="baratosCursosContent">


          {cursosBaratos.map(cursoBarato => (

            <a href="#">
              <figure>
                <div className="baratoCourse">R$ {cursoBarato.preco}</div>
                <img src={imgCard}></img>
                <figcaption>
                  {cursoBarato.nomeCurso}
                </figcaption>
              </figure>
            </a>

          ))}



        </div>

        <RightContent />

      </div>
    )
  }
}
