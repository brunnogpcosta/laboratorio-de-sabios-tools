import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './FormatoCurso.css';



export default class FormatoCurso extends Component {
  state = {
    cursosFormato: [],
    cursosNome: "",
    vazio: ""
  };


  async componentDidMount() {
    const response = await api.get('http://localhost:3001/allCourses')
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
    const { cursosNome } = this.state
    const { cursosFormato } = this.state
    const { vazio } = this.state

    return (
      <div id="formatoContainer">
        <h2>{cursosNome.formato}</h2>



        <div className="formatoCursosContent">
          <div className="spamMessage" style={{ display: vazio }}>
            Nenhum Curso Encontrado.
          </div>

          {cursosFormato.map(cursos => (
            <Link to={{
              pathname: '/detalhe',
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
                <div className="formatoCourse">R$ {cursos.preco}</div>
                <img src={cursos.thumb} alt={`Foto do Curso ${cursos.nomeCurso}`}></img>
                <figcaption title={cursos.nomeCurso}>
                  {cursos.nomeCurso}
                </figcaption>
              </figure>
            </Link>


          ))}


        </div>



      </div >
    )
  }
}
