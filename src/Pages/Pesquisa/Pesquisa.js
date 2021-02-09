import React, { Component } from 'react'

import api from '../../services/api'

import './Pesquisa.css'

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import searchBt from './img/search.svg'

import RightContent from '../../components/RightContent/RightContentComponent'

let response;

export default class Pesquisa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      cursos: [],
      cursosFiltrados: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  async componentDidMount() {
    response = await api.get('http://localhost:3333/allCourses')
    this.setState({ cursos: response.data.cursos })
    this.setState({ cursosFiltrados: response.data.cursos })
  }

  handleSearch(termo) {
    console.log("Termo: ", termo)
    const arrayCursos = this.state.cursos;
    this.setState({
      cursosFiltrados: this.state.cursos.filter(curso => curso.nomeCurso.toLowerCase().indexOf(termo.toLowerCase()) > -1)

    })
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    this.handleSearch(event.target.value)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    this.handleSearch(this.state.value)
    event.preventDefault();
  }


  render() {

    const { cursosFiltrados } = this.state

    return (
      <div id="pesquisaContent">
        <h2>Encontre seu Curso</h2>

        <label htmlFor="search">
          <img src={searchBt} />
          <input type="search" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <h3>{cursosFiltrados.length} Resultado(s) Encontrado(s)</h3>

        <div className="pesquisaContainer">

          {cursosFiltrados.map(cursoFiltrado => (
            <a href="#">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  {cursoFiltrado.nomeCurso}
                </figcaption>
              </figure>
            </a>




          ))}


        </div>


      </div>
    )
  }
}
