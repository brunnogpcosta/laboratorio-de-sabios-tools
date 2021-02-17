import React, { Component } from 'react'

import './Ranking.css'

import start from './img/star.svg'

export default class Ranking extends Component {
  render() {
    return (

      <div id="rankingContent">


        <div id="leftContent">
          <div className="titulosRanking">
            <h3>Ranking</h3>
          </div>

          <div id="rankeados">
            <ul>
              <li>
                <p><strong>Brunno Costa [SM] [SS] [SP]</strong></p>
                <img src={start} alt="Foto de Estrela" />
                <img src={start} alt="Foto de Estrela" />
                <img src={start} alt="Foto de Estrela" />
              </li>

            </ul>

          </div>
        </div>

        <div id="rightContent">
          <div className="titulosRanking">
            <h3>Informações Importantes</h3>

          </div>

          <div id="boardRanking">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec sapien sed arcu facilisis cursus. Nunc accumsan arcu nisi, vel gravida dui fermentum sit amet. Suspendisse iaculis velit vel volutpat pretium. Vestibulum ac tristique erat. Vestibulum fringilla sed justo sit amet maximus. Sed id enim nec massa fermentum luctus nec tempus ante. Morbi in bibendum ante. Sed ornare odio nec interdum elementum. Duis convallis felis id metus dapibus ornare. Praesent vel tincidunt purus, ac vehicula nibh. Nam non tempor nunc. Curabitur nec libero eget
            </p>

          </div>

        </div>


      </div>


    )
  }
}
