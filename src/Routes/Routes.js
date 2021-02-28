import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import Satisfacao from '../Pages/Satisfacao/Satisfacao';
import Barato from '../Pages/Baratos/Baratos';
import Pesquisa from '../Pages/Pesquisa/Pesquisa';
import Trilha from '../Pages/Trilha/Trilha';
import TrilhaChoice from '../Pages/Trilha/TrilhaChoice';
import Ranking from '../Pages/Ranking/Ranking';
import Detalhe from '../Pages/CursoDetalhe/CursoDetalhe';
import Categoria from '../Pages/categoriaCurso/CategoriaCurso'
import Formato from '../Pages/FormatoCurso/FormatoCurso'
import Info from '../Pages/Info/Info'
import NotFound from '../Pages/NotFound/NotFound'
import Crud from '../Pages/Crud/Crud'
import Login from '../Pages/login/login'

import Spam from '../components/MelhorEmailSpam/MelhorEmailSpam'



export class Routes extends Component {

  render() {

    return (

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/satisfacao' component={Satisfacao} />
        <Route path='/barato' component={Barato} />
        <Route path='/pesquisa' component={Pesquisa} />
        <Route path='/trilha' component={Trilha} />
        <Route path='/cursos/trilha/:id' component={TrilhaChoice} />
        <Route path='/ranking' component={Ranking} />
        <Route path='/detalhe/:id' component={Detalhe} />
        <Route path='/categoria' component={Categoria} />
        <Route path='/formato' component={Formato} />
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