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
            <Link to='/categoria'>
              <img src={plus} alt="Mais Cursos" />
            </Link>
          </div>
        </div>

        <div className="melhoresCursosContent">

          {cursos.map(curso => (

            <Link to="/detalhe">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  {curso.nomeCurso}
                </figcaption>
              </figure>
            </Link>

          ))}

        </div>

        <div id="demaisCursos">

          {cursos.map(curso => (

            <div id="cursoUm">
              <h3>{curso.categoria}</h3>
              <Link to="/categoria"><img src={plus} alt="Mais Cursos" /></Link>
              <Link to="/detalhe">
                <figure>
                  <img src={imgCard}></img>
                  <figcaption>
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
