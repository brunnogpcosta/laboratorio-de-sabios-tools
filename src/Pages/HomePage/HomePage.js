import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import api from '../../services/api'

import './HomePageStyle.css'
import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import plus from './img/plus-circle.svg'

import RightContentHP from '../../components/RightContentHP/RightContentHPComponent'



export default class HomePage extends Component {
  state = {
    cursos: [],
    cursosCategoria: []
  }

  async componentDidMount() {
    const response = await api.get('allCourses')
    const responseCategoria = await api.get('categories')

    this.setState({ cursos: response.data.cursos, cursosCategoria: responseCategoria.data })
  }




  render() {

    const { cursos, cursosCategoria } = this.state;


    return (
      <div className="homePageContainer">
        <div className="melhoresCursos">
          <div className="pageTitleHomePage">
            <h2>Melhores Cursos</h2>
            <Link to={{
              pathname: '/categoria',
              state: {
                categoria: "Melhores Cursos",
              }
            }}>
              <img src={plus} alt="Mais Cursos" />
            </Link>
          </div>
        </div>

        <div className="melhoresCursosContent">

          {cursos.map(curso => (

            <Link to={{
              pathname: '/detalhe',
              state: {
                nomeCurso: curso.nomeCurso,
                descricaoCurso: curso.descricaoCurso,
                preco: curso.preco,
                thumb: curso.thumb
              }
            }} >
              <figure>
                <div className="baratoHPCourse">R$ {curso.preco}</div>
                <img src={curso.thumb}></img>
                <figcaption Title={curso.nomeCurso}>
                  {curso.nomeCurso}
                </figcaption>
              </figure>
            </Link>

          ))}

        </div>

        <div id="demaisCursos">
          {cursosCategoria.map(cursoCategoria => (

            <div id="cursoQuadrado">
              <h3 title={cursoCategoria.categoria}>{cursoCategoria.categoria}</h3>
              <Link to={{
                pathname: '/categoria',
                state: {
                  categoria: cursoCategoria.categoria
                }
              }}>
                <img src={plus} alt="Mais Cursos" /></Link>
              <Link to={{
                pathname: '/detalhe',
                state: {
                  nomeCurso: cursoCategoria.nomeCurso,
                  descricaoCurso: cursoCategoria.descricaoCurso,
                  preco: cursoCategoria.preco,
                  thumb: cursoCategoria.thumb
                }
              }} >
                <figure>
                  <div className="baratoHPCourse">R$ {cursoCategoria.preco}</div>
                  <img src={cursoCategoria.thumb}></img>
                  <figcaption title={cursoCategoria.nomeCurso}>
                    {cursoCategoria.nomeCurso}
                  </figcaption>
                </figure>
              </Link>

            </div>

          ))}


        </div>
        <RightContentHP />
      </div>




    )
  }
}
