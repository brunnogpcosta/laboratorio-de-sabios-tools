import React, { Component } from 'react'

import './Baratos.css';

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'


export default class Baratos extends Component {
  render() {
    return (
      <div id="baratosContainer">
        <h2>Mais Baratos</h2>

        <div className="baratosCursosContent">
          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 19,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 29,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 29,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 59,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 59,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 99,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 199,99</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
            </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="baratoCourse">R$ 199,99</div>
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
