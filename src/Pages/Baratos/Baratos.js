import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

import api from '../../services/api'


export default class Baratos extends Component {
  state = {
    cursosBaratos: [],
    vazio: true

  }

  async componentDidMount() {
    const response = await api.get('allCourses')
    const objetoOrdenado = response.data.cursos.sort((a, b) => (parseFloat(a.preco) > parseFloat(b.preco)) ? 1 : -1)

    //console.log(objetoOrdenado)
    this.setState({
      cursosBaratos: objetoOrdenado,
      vazio: false
    })

  }


  render() {

    const { cursosBaratos, vazio } = this.state
    const msg = "Esta página lista os cursos por ordem de preço. Vai do menor ao maior valor de investimento."

    return (
      <div id="container">

        <div id="titleContent">
          <h2>Mais Baratos</h2>
        </div>

        <div >
          {vazio ? (
            <div className="containerSkt">
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
            </div>
          ) : (
              <div id="cursosContent">

                {
                  cursosBaratos.map(cursoBarato => (

                    <Link to={{
                      pathname: `/detalhe/${cursoBarato.id}`,
                      state: {
                        nomeCurso: cursoBarato.nomeCurso,
                        conteudoCurso: cursoBarato.conteudoCurso,
                        preco: cursoBarato.preco,
                        thumb: cursoBarato.thumb,
                        divulgacao: cursoBarato.divulgacao.site,
                        pagamento: cursoBarato.comprar.hotlink,
                        formato: cursoBarato.formato
                      }
                    }}>
                      <figure key={cursoBarato.id}>
                        <img src={cursoBarato.thumb} alt={`foto ${cursoBarato.nomeCurso}`} />

                        <figcaption title={cursoBarato.nomeCurso}>
                          <strong> {cursoBarato.nomeCurso}</strong><br />
                          {cursoBarato.formato}
                        </figcaption>

                        <div id="infoComplementa" style={{ color: "#444" }}>
                          <div className="priceTag">
                            R$ {cursoBarato.preco}<br />
                          </div>
                        </div>

                      </figure>
                    </Link>

                  ))
                }
              </div>
            )}
        </div>

      </div >
    )
  }
}
