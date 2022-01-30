import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Info from '../Pages/Info/Info'
import NotFound from '../Pages/NotFound/NotFound'
import Ferramenta from '../Pages/Ferramentas/Ferramentas'
import FerramentaGeraCV from '../Pages/Ferramentas/geradorCV/FerramentasGeraCV'
import VisualizaCurriculo from '../Pages/Ferramentas/geradorCV/CVView'
import FerramentasBinarioDecimal from '../Pages/Ferramentas/binarioDecimal/FerramentasBinarioDecimal'
import GeradorBorda from '../Pages/Ferramentas/geradorBorda/GeradorBorda'
import codigoCores from '../Pages/Ferramentas/codigoCores/CodigoCores'
import geradorGuid from '../Pages/Ferramentas/geradorGuid/GeradorGuid'




export class Routes extends Component {

  render() {

    return (

      <Switch>
        <Route exact path='/' component={Ferramenta} />
        <Route path='/ferramentas' component={Ferramenta} />
        <Route path='/geradorDeCV' component={FerramentaGeraCV} />
        <Route path='/conversorBinarioDecimal' component={FerramentasBinarioDecimal} />
        <Route path='/geradorBorda' component={GeradorBorda} />
        <Route path='/codigoCores' component={codigoCores} />
        <Route path='/geradorGuid' component={geradorGuid} />
        <Route path='/visualizaCurriculo' component={VisualizaCurriculo} />
        <Route path='/info' component={Info} />

        <Route component={NotFound} />
      </Switch>

    )
  }
};

export default Routes;