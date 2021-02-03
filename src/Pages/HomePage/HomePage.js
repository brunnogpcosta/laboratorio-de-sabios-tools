import React, { Component } from 'react'

import './HomePageStyle.css'
import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import plus from './img/plus-circle.svg'



export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="homePageContainer">


          <div className="melhoresCursos">
            <div className="pageTitleHomePage">
              <h2>Melhores Cursos </h2>
              <a href=""><img src={plus} alt="Mais Cursos" /></a>
            </div>
          </div>

          <div className="melhoresCursosContent">
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

          <div id="demaisCursos">
            <div id="cursoUm">
              <h3>MKT Digital</h3>
              <a href=""><img src={plus} alt="Mais Cursos" /></a>
              <a href="#">
                <figure>
                  <img src={imgCard}></img>
                  <figcaption>
                    Estatística Fundamental
                  </figcaption>
                </figure>
              </a>

            </div>

            <div id="cursoDois">
              <h3>Estoicismo</h3>
              <a href=""><img src={plus} alt="Mais Cursos" /></a>
              <a href="#">
                <figure>
                  <img src={imgCard}></img>
                  <figcaption>
                    Estatística Fundamental
              </figcaption>
                </figure>
              </a>
            </div>



            <div id="cursoTres">
              <h3>Psicologia</h3>
              <a href=""><img src={plus} alt="Mais Cursos" /></a>
              <a href="#">
                <figure>
                  <img src={imgCard}></img>
                  <figcaption>
                    Estatística Fundamental
              </figcaption>
                </figure>
              </a>
            </div>

            <div id="cursoQuatro">
              <h3>Desenvolvimento</h3>
              <a href=""><img src={plus} alt="Mais Cursos" /></a>
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
        </div>
      </div>
    )
  }
}
