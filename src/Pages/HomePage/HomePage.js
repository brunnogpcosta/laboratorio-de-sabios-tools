import React, { Component, Fragment } from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { Icon } from '@material-ui/core';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import ArrowLeftRoundedIcon from '@material-ui/icons/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@material-ui/icons/ArrowRightRounded';

import { Link } from 'react-router-dom';
import api from '../../services/api'

import './HomePageStyle.css'
import plus from './img/plus-circle.svg'
import RightContentHP from '../../components/RightContentHP/RightContentHPComponent'

export default class HomePage extends Component {
  state = {
    cursos: [],
    cursosTotal: "0",
    cursosCategoria: [],
    vazio: true
  }

  async componentDidMount() {
    const response = await api.get('courses/limit/8')
    const responseCategoria = await api.get('categories')
    this.setState({ cursos: response.data, cursosCategoria: responseCategoria.data, vazio: false })
  }




  render() {
    const { cursos, cursosCategoria, vazio } = this.state;

    return (
      <div className="homePageContainer">

        <div className="melhoresCursos">
          <div className="pageTitleHomePage">
            <h2>Cursos Disponíveis</h2>
            <Link to={{
              pathname: '/categoria',
              state: {
                categoria: "Cursos Disponíveis",
              }
            }}>
              <img src={plus} alt="Mais Cursos" />
            </Link>
          </div>
        </div>



        <div>
          {vazio ? (
            <Fragment className="containerSkt">
              <div className="containerSkt">
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={200} />
              </div>
            </Fragment>
          ) : (
              <div className="melhoresCursosContent">

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

                      <img src={curso.thumb} alt={`foto do curso ${curso.nomeCurso}`}></img>
                      <figcaption title={curso.nomeCurso}>
                        <strong> {curso.nomeCurso}</strong><br />
                        <div id="infoComplementa" style={{ color: "#444" }}>
                          <div className="priceTag">
                            R$ {curso.preco}<br />
                          </div>
                        </div>
                        {curso.formato}
                      </figcaption>
                    </figure>
                  </Link>

                ))}
              </div>
            )}
        </div>



        <div id="demaisCursoTopo">
          <h2>Por Categoria</h2>

          {vazio ? (
            <Fragment className="containerSkt">
              <div className="containerSkt">
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={200} />
                </div>
              </div>
            </Fragment>
          ) : (


              <div id="demaisCursos">
                {cursosCategoria.map(cursoCategoria => (

                  <div id="cursoQuadrado" key={cursosCategoria.categoria}>
                    <h3 title={cursoCategoria.categoria}>{cursoCategoria.categoria}</h3>
                    <Link to={{
                      pathname: '/categoria',
                      state: {
                        categoria: cursoCategoria.categoria
                      }
                    }}>
                      <img src={plus} alt="Mais Cursos" /></Link>



                    <Link className="aFigure" to={{
                      pathname: `/detalhe/${cursoCategoria.id}`,
                      state: {
                        nomeCurso: cursoCategoria.nomeCurso,
                        conteudoCurso: cursoCategoria.conteudoCurso,
                        preco: cursoCategoria.preco,
                        thumb: cursoCategoria.thumb,
                        divulgacao: cursoCategoria.divulgacao.site,
                        pagamento: cursoCategoria.comprar.hotlink,
                        formato: cursoCategoria.formato
                      }
                    }} >



                      <figure >
                        <img src={cursoCategoria.thumb} alt={`foto do curso ${cursoCategoria.nomeCurso}`}></img>
                        <figcaption title={cursoCategoria.nomeCurso}>
                          <strong> {cursoCategoria.nomeCurso}</strong><br />
                          <div id="infoComplementa" style={{ color: "#444" }}>
                            <div className="priceTag">
                              R$ {cursoCategoria.preco}<br />
                            </div>
                          </div>
                          {cursoCategoria.formato}
                        </figcaption>

                      </figure>
                    </Link>

                  </div>

                ))}


              </div>
            )}
        </div>

        <div id="demaisCursos">
          <h2>Por Formato</h2>

          <div className="cursoQuadradoFormato" key={cursosCategoria.categoria}>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Cursos online, Área de Membros, Serviços de Assinatura"
              }
            }}>
              <h3 title="Cursos online, Área de Membros, Serviços de Assinatura">Cursos online, Área de Membros, Serviços de Assinatura</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "eBooks, Documentos"
              }
            }}>
              <h3 title="eBooks, Documentos">eBooks, Documentos</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Ingressos para eventos"
              }
            }}>
              <h3 title="Ingressos para eventos" className="disabilitarFormatoBotao">Ingressos para eventos</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Screencasts, Filmes, Clipes"
              }
            }}>
              <h3 title="Screencasts, Filmes, Clipes" className="disabilitarFormatoBotao">Screencasts, Filmes, Clipes</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Áudios, Músicas, Ringtones"
              }
            }}>
              <h3 title="Áudios, Músicas, Ringtones" className="disabilitarFormatoBotao">Áudios, Músicas, Ringtones</h3>
            </Link>


            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Software, Programas para baixar"
              }
            }}>
              <h3 title="Software, Programas para baixar" className="disabilitarFormatoBotao">Software, Programas para baixar</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Imagens, Ícones, Fotos"
              }
            }}>
              <h3 title="Imagens, Ícones, Fotos" className="disabilitarFormatoBotao">Imagens, Ícones, Fotos</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Números de Série, Cupons de Desconto"
              }
            }}>
              <h3 title="Números de Série, Cupons de Desconto" className="disabilitarFormatoBotao">Números de Série, Cupons de Desconto</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Aplicativos para Celular"
              }
            }}>
              <h3 title="Aplicativos para Celular" className="disabilitarFormatoBotao">Aplicativos para Celular</h3>
            </Link>

            <Link className="disabilitarFormato" to={{
              pathname: '/formato',
              state: {
                formato: "Templates, Códigos Fonte"
              }
            }}>
              <h3 title="Templates, Códigos Fonte" className="disabilitarFormatoBotao">Templates, Códigos Fonte</h3>
            </Link>

          </div>

        </div>
        <RightContentHP />
      </div>




    )
  }
}
