import React, { Component } from 'react'

import { Link } from 'react-router-dom';

import './HomePageStyle.css'
import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import plus from './img/plus-circle.svg'

import RightContentHP from '../../components/RightContentHP/RightContentHPComponent'



export default class HomePage extends Component {
  render() {
    return (


      <div className="homePageContainer">


        <div className="melhoresCursos">
          <div className="pageTitleHomePage">
            <h2>Melhores Cursos </h2>
            <Link to='/categoria'><img src={plus} alt="Mais Cursos" /></Link>
          </div>
        </div>

        <div className="melhoresCursosContent">

          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>

          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>
          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>
          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>
          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>
          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>
          <Link to="/detalhe">
            <figure>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </Link>

        </div>

        <div id="demaisCursos">
          <div id="cursoUm">
            <h3>MKT Digital</h3>
            <Link to="/categoria"><img src={plus} alt="Mais Cursos" /></Link>
            <Link to="/detalhe">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  Estatística Fundamental
              </figcaption>
              </figure>
            </Link>

          </div>

          <div id="cursoDois">
            <h3>Estoicismo</h3>
            <Link to="/categoria"><img src={plus} alt="Mais Cursos" /></Link>
            <Link to="/detalhe">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  Estatística Fundamental
                  </figcaption>
              </figure>
            </Link>
          </div>



          <div id="cursoTres">
            <h3>Psicologia</h3>
            <Link to="/categoria"><img src={plus} alt="Mais Cursos" /></Link>
            <Link to="/detalhe">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  Estatística Fundamental
                  </figcaption>
              </figure>
            </Link>
          </div>

          <div id="cursoQuatro">
            <h3>Desenvolvimento</h3>
            <Link to="/categoria"><img src={plus} alt="Mais Cursos" /></Link>
            <Link to="/detalhe">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  Estatística Fundamental
                  </figcaption>
              </figure>
            </Link>
          </div>

          <div id="cursoCinco">
            <h3>Animais</h3>
            <Link to="/categoria"><img src={plus} alt="Mais Cursos" /></Link>

            <Link to="/detalhe">
              <figure>
                <img src={imgCard}></img>
                <figcaption>
                  Estatística Fundamental
                  </figcaption>
              </figure>
            </Link>
          </div>

        </div>
        <RightContentHP />
      </div>




    )
  }
}
