import React, { Component } from 'react'

import Descricao from "../../../components/Descricao/Descricao";
import './FerramentasBinarioDecimal.css'


export default class FerramentasBinarioDecimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      operation: '',
      resultadoFinal: '',
      Style: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setMyOperator = this.setMyOperator.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value, });

  }

  setMyOperator(event) {
    this.setState({ operation: event.target.value });
  }

  handleSubmit(event) {

    //console.log('My Number: ' || this.state.value);
    //console.log('My Numeric Base: ' || this.state.operation);

    this.calc(this.state.value, this.state.operation);

    event.preventDefault();
  }

  calc(event, operation) {
    //console.log('Im in')
    //console.log("Valor de event:", event)

    if (event === '') {
      this.setState({ resultadoFinal: 'Por favor, digite um número', Style: 'MyResultNegativo' })

    } else {

      if (operation === 'binary') {
        const answer = Number(event).toString(2)
        this.setState({ resultadoFinal: answer, Style: 'MyResult' })
        //  console.log(answer)
      }

      if (operation === 'decimal') {
        //MELHORAR LÓGICA OU CRIAR UMA FUNÇÃO
        if (event.indexOf(2) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(3) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(4) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(5) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(6) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(7) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(8) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else if (event.indexOf(9) > -1) {
          this.setState({ resultadoFinal: 'O número informado não é binário', Style: 'MyResultNegativo' })
        } else {
          //console.log("é binario:", event)

          //IS A BINARY NUMBER

          const answer = parseInt(event, 2)
          this.setState({ resultadoFinal: answer, Style: 'MyResult' })
        }

      }
    }
  }


  render() {
    return (

      <div id="binarioContent">
        <h3>Conversor Decimal x Binário</h3>
        <Descricao passaDescricao="6ab49d46-5a52-411f-9b6b-4913568359d8"></Descricao>

        <div className="containerBinario">
          <form className="myform" onSubmit={this.handleSubmit}>
            <h3>Conversor Decimal x Binário</h3>

            <label>Digite um número
              <input type="text" id='inputtext' onChange={this.handleChange} />
            </label>

            <div onChange={this.setMyOperator} className="options">
              <label htmlFor="decimal">
                Decimal
                <input type="radio" value="decimal" name="operator" required />
              </label>

              <label htmlFor="binary">
                Binário
                <input type="radio" value="binary" name="operator" required />
              </label>

            </div>

            <div id="result">
              <input type='submit' id='resultButton' value='Gerar' />

              <div id={this.state.Style}>
                <h4>{this.state.resultadoFinal}</h4>
              </div>
            </div>

            <div className='espaco'>
            </div>

          </form>
        </div>
      </div>


    )

  };;
}
