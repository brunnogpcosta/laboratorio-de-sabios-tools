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
  }

  async componentDidMount() {
    const response = await api.get('http://localhost:3333/allCourses')
    this.setState({ cursos: response.data.cursos })


  }


  render() {

    const { cursos } = this.state;

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
                preco: curso.preco
              }
            }} >
              <figure>
                <div className="baratoHPCourse">R$ {curso.preco}</div>
                <img src={imgCard}></img>
                <figcaption Title={curso.nomeCurso}>
                  {curso.nomeCurso}
                </figcaption>
              </figure>
            </Link>

          ))}

        </div>

        <div id="demaisCursos">

          {cursos.map(curso => (

            <div id="cursoQuadrado">
              <h3 title={curso.categoria}>{curso.categoria}</h3>
              <Link to={{
                pathname: '/categoria',
                state: {
                  categoria: curso.categoria
                }
              }}>
                <img src={plus} alt="Mais Cursos" /></Link>
              <Link to={{
                pathname: '/detalhe',
                state: {
                  nomeCurso: curso.nomeCurso,
                  descricaoCurso: curso.descricaoCurso,
                  preco: curso.preco
                }
              }} >
                <figure>
                  <div className="baratoHPCourse">R$ {curso.preco}</div>
                  <img src={imgCard}></img>
                  <figcaption title={curso.nomeCurso}>
                    {curso.nomeCurso}
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
