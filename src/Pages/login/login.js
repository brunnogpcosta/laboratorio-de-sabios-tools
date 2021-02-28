import React, { Component } from 'react'

import './login.css'

export default class login extends Component {
  render() {
    return (

      <div className="login-wrapper">
        <div className="contentLogin">
          <h1>Acesso de Administrador</h1>
          <form>
            <br />
            <label>
              Username<br />
              <input type="text" /><br />
            </label>
            <label>
              Password<br />
              <input type="password" />
            </label>
            <div>
              <button type="submit">Acessar</button>
            </div>
          </form>
        </div>
      </div >
    )
  }
}
