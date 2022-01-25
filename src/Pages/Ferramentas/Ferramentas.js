import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Ferramentas.css'

import data from '../../mock/Mock.json'

export default class Ferramentas extends Component {
  render() {



    const listItems = data.ferramentas.map((d) =>

      <Link to={"/" + d.path}>
        <figure className="bt-cv">
          <img src={d.img} alt="Logo" />
          <figcaption>{d.nome}</figcaption>

        </figure>
      </Link >
    );


    return (
      <div id="container" >
        <div id="cursosContentFerramentas">
          {listItems}
        </div>
      </div>
    )
  }
}
