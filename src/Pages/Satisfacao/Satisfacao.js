import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';


import api from '../../services/api'
export default class Satisfacao extends Component {
  state = {
    cursos: [],
    vazio: true

  }

  async componentDidMount() {
    const response = await api.get('allCourses')
    this.setState({
      cursos: response.data.cursos.sort((b, a) => (parseFloat(a.satisfacao) > parseFloat(b.satisfacao)) ? 1 : -1),
      vazio: false
    })

  }

  saberCor(satisfacao) {
    if (satisfacao >= 4) {
      return "green";
    }
    if (satisfacao < 4 && satisfacao > 3) {
      return "orange";
    }
    if (satisfacao < 3 && satisfacao > 2) {
      return "darkyellow";
    }
  }


  render() {
    const { cursos, vazio } = this.state
    const msg = "Esta página ordena os cursos de acordo com a pontuação atual, sendo 0 (Zero) a menor e 5 (Cinco) a maior."
    return (

      <div id="container">

        <div id="titleContent">
          <h2>Avaliação</h2>
        </div>


        <div >
          {vazio ? (

            <div className="containerSkt">
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
            </div>

          ) : (
              <div id="cursosContent">

                {cursos.map(curso => (
                  <Link to={{
                    pathname: `/detalhe/${curso.id}`,
                    state: {
                      nomeCurso: curso.nomeCurso,
                      conteudoCurso: curso.conteudoCurso,
                      preco: curso.preco,
                      thumb: curso.thumb,
                      divulgacao: curso.divulgacao.site,
                      pagamento: curso.comprar.hotlink,
                      formato: curso.formato
                    }
                  }} >
                    <figure key={curso.id}>

                      <img src={curso.thumb} alt={`Foto do Curso ${curso.nomeCurso}`}></img>
                      <figcaption title={curso.nomeCurso}>
                        <strong>{curso.nomeCurso}</strong>

                        <div style={{ color: this.saberCor(curso.satisfacao) }} >Satisfação: {curso.satisfacao}</div>
                      </figcaption>
                      <div id="infoComplementa" style={{ color: "#444" }}>
                        <div className="priceTag">
                          R$ {curso.preco}<br />
                        </div>
                      </div>
                    </figure>
                  </Link>
                ))}

              </div>
            )}
        </div>
      </div>
    )
  }
}
