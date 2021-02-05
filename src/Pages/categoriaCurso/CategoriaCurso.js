import React, { Component } from 'react'

import './CategoriaCurso.css';

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'


export default class CategoriaCurso extends Component {
  render() {
    return (
      <div id="categoriaContainer">
        <h2>Cursos de Estatística</h2>

        <div className="categoriaCursosContent">
          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 19,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 29,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 29,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 59,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 59,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 99,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 199,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="categoriaCourse">R$ 199,99</div>
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
