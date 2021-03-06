import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';
import api from '../../services/api'


export default class FormatoCurso extends Component {
  state = {
    cursosFormato: [],
    cursosNome: "",
    vazio: ""
  };


  async componentDidMount() {
    const response = await api.get('allCourses')
    this.setState({
      cursosNome: this.props.location.state
    })

    const cursosFiltred = response.data.cursos.filter(curso => curso.formato.toLowerCase().indexOf(this.state.cursosNome.formato.toLowerCase()) > -1)

    if (cursosFiltred.length === 0) {
      this.setState({ vazio: "block" })
    } else {
      this.setState({ cursosFormato: cursosFiltred, vazio: "none" })
    }

    this.estaVazio(this.vazio);
  }

  estaVazio(vazio) {
    return vazio;
  }




  render() {
    const { cursosNome, cursosFormato, vazio } = this.state

    return (
      <div id="container">
        <div id="titleContent">
          {cursosNome ? (
            <h2>{cursosNome.formato}</h2>

          ) : (
              <h2><Skeleton variant="rect" width={300} height={30} /></h2>
            )}
        </div>



        <div id="cursosContent">

          <div className="spamMessage" style={{ display: vazio }}>
            Nenhum Curso Encontrado.
          </div>

          {cursosFormato.map(cursos => (
            <Link to={{
              pathname: `/detalhe/${cursos.id}`,
              state: {
                nomeCurso: cursos.nomeCurso,
                conteudoCurso: cursos.conteudoCurso,
                preco: cursos.preco,
                thumb: cursos.thumb,
                divulgacao: cursos.divulgacao.site,
                pagamento: cursos.comprar.hotlink,
                formato: cursos.formato
              }
            }} >
              <figure key={cursos.id}>

                <img src={cursos.thumb} alt={`Foto do Curso ${cursos.nomeCurso}`}></img>
                <figcaption title={cursos.nomeCurso}>
                  <strong>{cursos.nomeCurso}</strong>
                  <div id="infoComplementa" style={{ color: "#444" }}>
                    <div className="priceTag">
                      R$ {cursos.preco}<br />
                    </div>
                  </div>
                  {cursos.formato}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>

      </div >
    )
  }
}
