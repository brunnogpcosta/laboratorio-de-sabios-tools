import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './TrilhaChoice.css'

export default class TrilhaChoice extends Component {
  state = {
    trilha: [],
    trilhaTitle: ""
  };


  async componentDidMount() {
    const response = await api.get('allCourses')
    const resultTrilha = response.data.cursos.filter(curso => curso.categoria === this.props.location.state.categoria)
    this.setState({
      trilha: resultTrilha,
      trilhaTitle: this.props.location.state.categoria
    })
  }

  render() {
    const { trilha, trilhaTitle } = this.state
    return (
      <div id="trilhaChoiceContent">

        <h2>Trilha do Sábio {trilhaTitle}</h2>

        <div id="trilhaChoiceMetas">
          <ul>
            {trilha.map(trail => (

              <li>
                <Link to={{
                  pathname: '/detalhe',
                  state: {
                    nomeCurso: trail.nomeCurso,
                    conteudoCurso: trail.conteudoCurso,
                    preco: trail.preco,
                    thumb: trail.thumb
                  }
                }} >
                  <figure>
                    <img src={trail.thumb} alt={`Foto do Curso ${trail.cursoNome}`} />
                    <figcaption title={trail.nomeCurso} key={trail.id}>
                      {trail.nomeCurso}
                    </figcaption>
                  </figure>
                </Link>
              </li>

            ))}

          </ul>


        </div>

        <div id="informativoFormacao">
          <h4>Terminou a trilha?</h4>
          <br />

          <p>
            Parabéns!!!!<br /><br />

            Você é digno de fazer pate da nossa lista de sábios.  Caso queira, nos mande seu nome e comprovante de compra para verificarmos se a compra
            foi feita através de nossos links ao email johndee@gmail.com para que a nossa equipe te inclua em nosso ranking de sábios.<br /><br />

            <strong>Lembre-se</strong>, um sábio não se satisfaz, continue estudando, praticando e de brinde acumule pontos em nosso site.
          </p>
        </div>

      </div>
    )
  }
}
