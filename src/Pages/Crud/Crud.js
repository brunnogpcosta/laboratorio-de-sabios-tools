import React, { Component } from 'react'

import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';

import api from '../../services/api'


import './Crud.css'

export default class Crud extends Component {
  state = {
    rows: [],

  }

  async componentDidMount() {
    const cursosCadastrados = await api.get('allCourses')
    this.renderizarColunas(cursosCadastrados)
  }


  renderizarColunas(cursos) {
    const colunas = []
    cursos.data.cursos.map(element => {
      colunas.push({ id: element.id, curso: element.nomeCurso, assunto: element.categoria, formato: element.formato, formaAcesso: element.formaDeAcesso, preco: element.preco })
    });
    this.setState({ rows: colunas })

  }


  verificatLinhaSelecionada(e) {
    console.log(e)


  }



  render() {
    const { rows } = this.state

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'curso', headerName: 'Curso', width: 300 },
      { field: 'assunto', headerName: 'Assunto', width: 200 },
      { field: 'formato', headerName: 'Formato', width: 200 },
      { field: 'formaAcesso', headerName: 'Forma de Acesso', width: 200 },
      { field: 'preco', headerName: 'Preço', type: 'number', width: 130 },

    ];



    return (
      <div id="crudContainer">
        <div id="cursos">
          <h2>Central Administrativa de Cursos</h2>

          <div id="minhaTabela" style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onCellClick={this.verificatLinhaSelecionada} />
          </div>

        </div>



        <div id="containerButtons">
          <div id="contentButtons">
            <Button variant="contained" color="primary" disabled>
              Alterar
            </Button>
            <Button variant="contained" color="secondary" disabled>
              Excluir
             </Button>
          </div>
          <Button variant="contained" disabled>Novo Curso</Button>
        </div>
      </div>

    )
  }
}
