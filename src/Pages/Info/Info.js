import React, { Component } from 'react'
import './Info.css'

export default class Info extends Component {
  render() {
    return (
      <div className="infoContent">
        <h2>Informações do Site</h2>

        <p>O site <strong>Laboratório de Sábios</strong> disponibiliza ferramentas que facilitam atividades normais a vida dos nossos visitantes. Ser sábio é não reiventar a roda.</p>

        <p>Todas as ferramentas são fáceis de ser manuseada e de uso intuitivo, cabendo o usuário tirar o melhor proveito de cada tools.</p>
        <br />

        <h2>Perguntas Frequentes</h2>
        <p><strong>O site tem algum custo?</strong><br />
        De modo algum, o site é inteiramente gratuito. O desenvolvedor fez o site com o intuito de praticar seus estudos e montar um portifólio para o mercado de trabalho.
        </p>

        <p><strong>Como posso retribuir o uso das ferramentas?</strong><br />
        Caso uma de nossas ferramentas tenha te ajudado e queira contribuir, existem duas possibilidade: A primeira forma é sempre clicar nos anúncios da página, a segunda é fazer uma contrubuíção com a doação de qualquer valor. <a href="#" target="_blank">Clique aqui para doar.</a>
        </p>

        <br />
        <h2>Contato</h2>
        <p>Qualquer dúvida em relação ao funcionamento ou sugestões ao site, pode ser esclarecida através do email <strong>contato@laboratoriodesabios.com.</strong></p>
      </div>
    )
  }
}
