import React, { Component } from 'react'

import api from '../../services/api'

import './Pesquisa.css'

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import searchBt from './img/search.svg'

import RightContent from '../../components/RightContent/RightContentComponent'
export default class Pesquisa extends Component {
  state = {
    cursos: [],
  }

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/allCourses')
    this.setState({ cursos: response.data.cursos })
  }





  render() {
    return (
      <div id="pesquisaContent">
        <h2>Encontre seu Curso</h2>

        <label htmlFor="search">
          <img src={searchBt} />
          <input type="search"></input>
        </label>
        <h3>28 Resultados Encontrados</h3>

        <div className="pesquisaContainer">
          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>


          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

        </div>


      </div>
    )
  }
}
