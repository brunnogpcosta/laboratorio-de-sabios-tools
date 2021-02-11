import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './CategoriaCurso.css';

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'


export default class CategoriaCurso extends Component {
  state = {
    cursosCategoria: [],
    cursosNome: ""
  };


  async componentDidMount() {
    const response = await api.get('http://localhost:3001/allCourses')
    this.setState({
      cursosNome: this.props.location.state
    })

    const cursosFiltred = response.data.cursos.filter(curso => curso.categoria.toLowerCase().indexOf(this.state.cursosNome.categoria.toLowerCase()) > -1)

    if (cursosFiltred.length == 0) {
      this.setState({ cursosCategoria: response.data.cursos })
    } else {
      this.setState({ cursosCategoria: cursosFiltred })
    }


  }




  render() {
    const { cursosNome } = this.state
    const { cursosCategoria } = this.state

    return (
      <div id="categoriaContainer">
        <h2>{cursosNome.categoria}</h2>

        <div className="categoriaCursosContent">

          {cursosCategoria.map(cursos => (
            <Link to={{
              pathname: '/detalhe',
              state: {
                nomeCurso: cursos.nomeCurso,
                conteudoCurso: cursos.conteudoCurso,
                preco: cursos.preco,
                thumb: cursos.thumb
              }
            }} >
              <figure>
                <div className="categoriaCourse">R$ {cursos.preco}</div>
                <img src={cursos.thumb}></img>
                <figcaption title={cursos.nomeCurso}>
                  {cursos.nomeCurso}
                </figcaption>
              </figure>
            </Link>


          ))}


        </div>



      </div >
    )
  }
}
