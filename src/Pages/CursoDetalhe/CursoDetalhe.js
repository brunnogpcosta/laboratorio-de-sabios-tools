import React, { Component } from 'react'
import Skeleton from '@material-ui/lab/Skeleton';

import api from '../../services/api';
import './CursoDetalhe.css'

import formaP from './img/formas_pgamento.jpg'


export default class CursoDetalhe extends Component {
  state = {
    curso: [],
    vazio: true
  };


  async componentDidMount() {
    window.scrollTo(0, 0)

    if (typeof this.props.location.state === "undefined") {
      const idCourse = window.location.pathname.replace('/detalhe/', '')
      const curso = await api.get(`course/${idCourse}`)
      this.setState({
        curso: ({ conteudoCurso: curso.data.conteudoCurso, divulgacao: curso.data.divulgacao.site, formato: curso.data.formato, nomeCurso: curso.data.nomeCurso, pagamento: curso.data.comprar.hotlink, preco: curso.data.preco, thumb: curso.data.thumb })
        , vazio: false

      })
    } else {
      this.setState({
        curso: this.props.location.state,
        vazio: false
      })

    }

  }


  tratarTexto(texto) {
    const makestring = `${texto}`
    return makestring

    //.replace(". ", ".\n\n");

  }

  descontoCurso(preco) {
    return ((parseFloat(preco) + (parseFloat(preco) * 40 / 100)).toFixed(2)).replace(".", ",")
  }


  render() {
    const { curso, vazio } = this.state;

    return (

      <div id="detalheContainer">
        {vazio ? (

          <div>
            <div id="titleDetalhe">
              <h2><Skeleton variant="rect" width={220} height={30} /></h2>
              <h3><Skeleton variant="rect" width={400} height={30} /></h3>
            </div>
            <div id="detaiBoard" >

              <div><Skeleton variant="rect" height={400} className="Skeleton" /></div>

              <br /><br /><br />

              <div className="alignPrice">
                <div id="detailPriceRed">
                  <s>De: R$ XX,XX</s>
                </div>
                <div id="detailPrice">
                  Por:  R$ XX,XX
                </div>
              </div>
            </div>
            <div className="parceleCredito">
              Parcele em até 12 vezes no cartão de crédito. *
            </div>
            <div className="formasPagamento">
              <img src={formaP} alt="imagem formas de pagamento" />
            </div>
            <p><strong>Imperdível não é mesmo? </strong>
            Clique no botão abaixo para efetuar sua compra.</p>
            <div className="alignPrice">
              <div id="comprarAgora">
                <a href="" target="_blank" rel="noreferrer" > Comprar</a>
              </div>
            </div>

            <small>* A quantidade de parcelas varia de acordo com o valor do produto.</small>
          </div>

        ) : (

            <div>
              <div id="titleDetalhe">
                <h2>{curso.nomeCurso}</h2>
                <h3>({curso.formato})</h3>
              </div>
              <div id="detaiBoard" >
                <img src={curso.thumb} alt={`imagem do curso ${curso.nomeCurso}`} />
                <div className="msg-wrapper ">
                  {this.tratarTexto(curso.conteudoCurso)}
                  <br /><br /><br />
                  <div id="containerSaibaMais">
                    <a className="saibaMais" href={curso.divulgacao} target="_blank">Saber Tudo Sobre o Curso</a>
                  </div>
                </div>
                <div className="alignPrice">
                  <div id="detailPriceRed">
                    <s>De: R$ {this.descontoCurso(curso.preco)}</s>
                  </div>
                  <div id="detailPrice">
                    Por:  R$ {curso.preco}
                  </div>
                </div>
              </div>
              <div className="parceleCredito">
                Parcele em até 12 vezes no cartão de crédito. *
              </div>
              <div className="formasPagamento">
                <img src={formaP} alt="imagem formas de pagamento" />
              </div>
              <p><strong>Imperdível não é mesmo? </strong>
               Clique no botão abaixo para efetuar sua compra.</p>
              <div className="alignPrice">
                <div id="comprarAgora">
                  <a href={curso.pagamento} target="_blank" rel="noreferrer" > Comprar</a>
                </div>
              </div>
              <small>* A quantidade de parcelas varia de acordo com o valor do produto.</small>

            </div>

          )}
      </div>
    )
  }
}
