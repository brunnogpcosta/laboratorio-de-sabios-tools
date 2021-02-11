import React, { Component } from 'react'

import './RightContentComponent.css'

export default class RightContentComponent extends Component {
  state = {
    mensagem: ""
  }

  componentDidMount() {
    this.setState({ mensagem: this.props.mensagem })

  }

  render() {
    const { mensagem } = this.state
    return (

      <div id="rightContentComponent">
        <h2>Informativo</h2>
        <div id="rightContentComponentBoard">

          <p>{mensagem}</p>
        </div>
      </div>
    )
  }
}
