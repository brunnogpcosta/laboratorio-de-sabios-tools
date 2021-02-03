import React, { Component } from 'react'

import './TrilhaChoice.css'
import imgCard from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'
import rightArrow from './img/chevrons-right_3.svg'

export default class TrilhaChoice extends Component {
  render() {
    return (
      <div id="trilhaChoiceContent">

        <h2>Trilha do Sábio Estóico</h2>

        <div id="trilhaChoiceMetas">
          <ul>

            <li>
              <a href="#">
                <figure>
                  <img src={imgCard} />
                  <figcaption>
                    Estatística Fundamental
                  </figcaption>
                </figure>
              </a>

            </li>
            <img src={rightArrow} />
            <li>
              <a href="#">
                <figure>
                  <img src={imgCard} />
                  <figcaption>
                    Estatística Fundamental
                  </figcaption>
                </figure>
              </a>


            </li>
            <img src={rightArrow} />
            <li>
              <a href="#">
                <figure>
                  <img src={imgCard} />
                  <figcaption>
                    Estatística Fundamental
                  </figcaption>
                </figure>
              </a>
            </li>

            <img src={rightArrow} />
            <li>
              <a href="#">
                <figure>
                  <img src={imgCard} />
                  <figcaption>
                    Estatística Fundamental
                  </figcaption>
                </figure>
              </a>
            </li>

            <img src={rightArrow} />
            <li>
              <a href="#">
                <figure>
                  <img src={imgCard} />
                  <figcaption>
                    Estatística Fundamental
                  </figcaption>
                </figure>
              </a>
            </li>

          </ul>


        </div>

        <div id="informativoFormacao">
          <h4>Terminou a trilha?</h4>
          <br />

          <p>
            Parabéns!!!!<br /><br />

            Você é digno de fazer pate da nossa lista de sábios.  Caso queira, nos mande seus nome e comprovante de compra para verificarmos se a compra
            foi feita através de nossos links ao email johndee@gmail.com para que a nossa equipe te inclua em nosso ranking de sábios.<br /><br />

            <strong>Lembre-se</strong>, um sábio não se satisfaz, continue estudando, praticando e de brinde acumule pontos em nosso site.
          </p>
        </div>

      </div>
    )
  }
}
