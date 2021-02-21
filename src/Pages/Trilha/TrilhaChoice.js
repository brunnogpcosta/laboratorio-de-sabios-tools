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
                    thumb: trail.thumb,
                    divulgacao: trail.divulgacao.site,
                    pagamento: trail.comprar.hotlink,
                    formato: trail.formato
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

            Você é digno de ser chamado sábio.  Aqui nós fazemos a venda e você compra, mas só você saberá se realmente se dedicou e aprendeu o que foi ensinado. Isso Depende de você!<br /><br />

            <strong>Lembre-se</strong>, um sábio não se satisfaz, continue estudando, praticando até chegar no seu melhor e ser referência no que faz.
          </p>
        </div>

      </div>
    )
  }
}
