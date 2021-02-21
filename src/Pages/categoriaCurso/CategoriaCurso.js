import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import api from '../../services/api'

import './CategoriaCurso.css';



export default class CategoriaCurso extends Component {
  state = {
    cursosCategoria: [],
    cursosNome: ""
  };


  async componentDidMount() {
    const response = await api.get('allCourses')


    if (typeof this.props.location.state !== 'undefined') {
      this.setState({
        cursosNome: this.props.location.state,
      })
    } else {
      this.setState({
        cursosNome: { categoria: "Todos as Categorias" },
      })
    }



    const cursosFiltred = response.data.cursos.filter(curso => curso.categoria.toLowerCase().indexOf(this.state.cursosNome.categoria.toLowerCase()) > -1)

    if (cursosFiltred.length === 0) {
      this.setState({ cursosCategoria: response.data.cursos, cursosNome: { categoria: "Todas as Categorias" } })
    } else {
      this.setState({ cursosCategoria: cursosFiltred })
    }


  }




  render() {
    const { cursosNome } = this.state
    const { cursosCategoria } = this.state

    return (
      <div id="categoriaContainer">
        <h2>{cursosNome.categoria}</h2>

        <div className="categoriaCursosContent">

          {cursosCategoria.map(cursos => (
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
                <div className="categoriaCourse">R$ {cursos.preco}</div>
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
