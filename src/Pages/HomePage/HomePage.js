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
    const response = await api.get('courses/limit/10')
    const responseCategoria = await api.get('categories')
   
    this.setState({ cursosTotal: response.data.cursos.length, cursos: cursosDisponiveisOito, cursosCategoria: responseCategoria.data, vazio: false })
  }




  render() {

    const { cursosTotal, cursos, cursosCategoria, vazio } = this.state;


    return (
      <div className="homePageContainer">

        <div className="melhoresCursos">
          <div className="pageTitleHomePage">
            <h2>Cursos Disponíveis ({cursosTotal})</h2>
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
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
                <Skeleton className="configuraSkt" variant="rect" width={220} height={165} />
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
                      <div className="cardPriceCourse">R$ {curso.preco}</div>
                      <img src={curso.thumb} alt={`foto do curso ${curso.nomeCurso}`}></img>
                      <figcaption title={curso.nomeCurso}>
                        {curso.nomeCurso}
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
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
                </div>
                <div className="configuraSkt">
                  <Skeleton className="sktDemais" variant="rect" width={220} height={30} />
                  <Skeleton variant="rect" width={220} height={165} />
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

                        <div className="cardPriceCourse">R$ {cursoCategoria.preco}</div>
                        <img src={cursoCategoria.thumb} alt={`foto do curso ${cursoCategoria.nomeCurso}`}></img>
                        <figcaption title={cursoCategoria.nomeCurso}>
                          {cursoCategoria.nomeCurso}
                        </figcaption>

                      </figure>
                    </Link>
                    `${ /*<div id="arrows">
                      <ArrowLeftRoundedIcon className="ajeitaSetas" style={{ color: "#ff7" }} />
                      <ArrowRightRoundedIcon className="ajeitaSetas" style={{ color: "#ff7" }} />
                  </div>*/}`
                  
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

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Ingressos para eventos"
              }
            }}>
              <h3 title="Ingressos para eventos">Ingressos para eventos</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Screencasts, Filmes, Clipes"
              }
            }}>
              <h3 title="Screencasts, Filmes, Clipes">Screencasts, Filmes, Clipes</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Áudios, Músicas, Ringtones"
              }
            }}>
              <h3 title="Áudios, Músicas, Ringtones">Áudios, Músicas, Ringtones</h3>
            </Link>


            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Software, Programas para baixar"
              }
            }}>
              <h3 title="Software, Programas para baixar">Software, Programas para baixar</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Imagens, Ícones, Fotos"
              }
            }}>
              <h3 title="Imagens, Ícones, Fotos">Imagens, Ícones, Fotos</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Números de Série, Cupons de Desconto"
              }
            }}>
              <h3 title="Números de Série, Cupons de Desconto">Números de Série, Cupons de Desconto</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Aplicativos para Celular"
              }
            }}>
              <h3 title="Aplicativos para Celular">Aplicativos para Celular</h3>
            </Link>

            <Link to={{
              pathname: '/formato',
              state: {
                formato: "Templates, Códigos Fonte"
              }
            }}>
              <h3 title="Templates, Códigos Fonte">Templates, Códigos Fonte</h3>
            </Link>

          </div>

        </div>
        <RightContentHP />
      </div>




    )
  }
}
