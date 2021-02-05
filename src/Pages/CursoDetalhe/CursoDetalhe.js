import React, { Component } from 'react'

import './CursoDetalhe.css'
import curso from './img/graficos-tabelas-sao-objetos-basicos-para-estudo-estatistica-5812154677e56.jpg'



export default class CursoDetalhe extends Component {
  render() {
    return (
      <div id="detalheContainer">
        <h2>Curso de Estatistica</h2>

        <div id="detaiBoard">

          <img src={curso} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt augue vitae blandit efficitur. Integer massa erat, dignissim vitae blandit eu, interdum ac ligula. Aliquam consequat diam sit amet diam commodo, vitae consequat nunc consequat. Pellentesque nec nisl orci. Donec dignissim tellus libero, eu eleifend est viverra at. Duis elit neque, imperdiet rhoncus nisl a, tempus tristique turpis. Nunc finibus, purus at lobortis rhoncus, leo sapien viverra massa, ac ultricies elit massa vitae mi. Phasellus eros purus, mollis vel dictum eu, vestibulum in est. Proin sed ex nec mi ultrices iaculis. Vestibulum magna mi, porttitor ac blandit eget, accumsan vel elit. Sed volutpat tortor ac nisi faucibus volutpat. Etiam ultricies ligula id turpis venenatis faucibus. Ut a nunc mauris. Integer at nisi in sapien rhoncus porttitor. Quisque a gravida ante, eu pharetra tortor.</p>
          <br />
          <p>Suspendisse vitae ex in ipsum euismod lacinia. Duis accumsan nec felis eget dapibus. Curabitur consectetur dignissim purus. Maecenas hendrerit pharetra faucibus. Aenean auctor, tortor vel semper blandit, massa diam hendrerit ex, sed mattis odio turpis sed magna. Sed et eros at eros vestibulum vehicula a non justo. Suspendisse dolor turpis, fringilla dapibus nunc vitae, sagittis fermentum est. Integer aliquet risus ac massa ultricies, sit amet efficitur turpis rhoncus. Fusce sed pulvinar elit.</p>
          <br />
          <p>In hac habitasse platea dictumst. Nullam et pretium turpis. Praesent blandit ultricies tortor non elementum. Maecenas ligula arcu, ultricies ac metus ut, bibendum tristique orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vestibulum tristique dignissim. Nulla hendrerit risus ac cursus vulputate. Vestibulum interdum laoreet libero. Nam condimentum at tellus vitae semper. Sed egestas ante sed dolor congue consectetur. Fusce id ultricies neque, non hendrerit odio. Donec imperdiet nisl quam, vitae cursus felis commodo id. Mauris dictum, elit eu fermentum mollis, massa ante maximus nibh, id varius elit sem at nisl. Fusce rutrum elit justo, quis varius tellus porta at.</p>
          <br />
          <p>In suscipit fringilla justo, ut molestie neque molestie ut. Praesent libero purus, sagittis vel felis nec, molestie tristique massa. Phasellus et eleifend purus. Morbi leo metus, consectetur at neque sit amet, vehicula rutrum ligula. Quisque in ipsum nisl. In pellentesque sem id orci pretium, ac hendrerit tortor vulputate. Vivamus dictum bibendum metus, id commodo arcu lobortis euismod. Proin eu lobortis metus.</p>
          <br />
          <p>Sed aliquet nunc et eleifend ultricies. Nunc aliquet felis in fermentum auctor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas ex ipsum, tristique vel turpis eget, placerat fringilla elit. Morbi auctor est id elementum interdum. Mauris nisi libero, bibendum in massa eu, tempus pulvinar nibh. Pellentesque luctus, ex id pulvinar bibendum, diam nisl sodales nunc, ac malesuada neque arcu interdum tortor. Mauris et maximus elit. Integer volutpat, nunc non fringilla tincidunt, velit mi sollicitudin metus, ut aliquet nisi metus non tellus. Nam vulputate justo nulla, in feugiat nunc rutrum eget. Sed dictum, odio ut imperdiet lobortis, mi arcu dictum eros, non cursus leo libero at libero.</p>

          <div className="alignPrice">
            <div id="detailPrice">
              R$ 29,99

            </div>


          </div>

          <p><strong>Imperdível não é mesmo? </strong>

          Clique no botão abaixo para efetuar sua compra.</p>


          <div className="alignPrice">

            <div id="comprarAgora">
              Comprar
             </div>

          </div>

        </div>

      </div>
    )
  }
}
