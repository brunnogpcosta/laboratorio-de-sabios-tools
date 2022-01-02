import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


import Info from '../Pages/Info/Info'
import NotFound from '../Pages/NotFound/NotFound'
import Crud from '../Pages/Crud/Crud'
import Login from '../Pages/login/login'
import Ferramenta from '../Pages/Ferramentas/Ferramentas'
import FerramentaGeraCV from '../Pages/Ferramentas/geradorCV/FerramentasGeraCV'
import FerramentasBinarioDecimal from '../Pages/Ferramentas/binarioDecimal/FerramentasBinarioDecimal'
import GeradorBorda from '../Pages/Ferramentas/geradorBorda/GeradorBorda'
import codigoCores from '../Pages/Ferramentas/codigoCores/CodigoCores'
import VisualizaCurriculo from '../Pages/Ferramentas/geradorCV/CVView'

import Spam from '../components/MelhorEmailSpam/MelhorEmailSpam'



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
        <Route path='/visualizaCurriculo' component={VisualizaCurriculo} />
        <Route path='/info' component={Info} />
        <Route path='/spam' component={Spam} />
        <Route path='/admin/' component={Login} />
        <Route path='/admin/crud' component={Crud} />
        <Route component={NotFound} />
      </Switch>

    )
  }
};

export default Routes;