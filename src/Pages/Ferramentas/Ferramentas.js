import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Ferramentas.css'

import data from '../../mock/Mock.json'



export default class Ferramentas extends Component {
  render() {



    const listItems = data.ferramentas.map((d) =>

      <div key={d.id}>
        <Link to={"/" + d.path}>
          <figure className="bt-cv">
            <img src={d.img} alt={d.nome} title={d.nome} />
            <figcaption title={d.nome}>{d.nome}</figcaption>
          </figure>
        </Link >
      </div>
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
