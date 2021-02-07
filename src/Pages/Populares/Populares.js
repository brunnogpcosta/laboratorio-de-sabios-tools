import React, { Component } from 'react'

import './Populares.css'

import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'

import RightContent from '../../components/RightContent/RightContentComponent'
export default class Populares extends Component {
  render() {
    return (

      <div id="popularesContainer">
        <h2>Mais Populares</h2>

        <div className="popularesCursosContent">
          <a href="#">
            <figure>
              <div className="positionCourse">1º</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="positionCourse">2º</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="positionCourse">3º</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="positionCourse">4º</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="positionCourse">5º</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </a>

          <a href="#">
            <figure>
              <div className="positionCourse">6º</div>
              <img src={imgCard}></img>
              <figcaption>
                Estatística Fundamental
              </figcaption>
            </figure>
          </a>

        </div>


        <RightContent />
      </div>
    )
  }
}
