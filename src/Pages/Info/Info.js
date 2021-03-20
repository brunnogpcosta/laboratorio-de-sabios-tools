import React, { Component } from 'react'
import './Info.css'

export default class Info extends Component {
  render() {
    return (
      <div className="infoContent">
        <h2>Informações do Site</h2>

        <p>O site <strong>Laboratório de Sábios</strong> disponibiliza cursos de terceiros que são produções independente e de responsabilidade de seus idealizadores.</p>

        <p>Todas as informações dos cursos estão disponíveis para consulta, cabendo ao usuário análisar e tirar o melhor proveito dos cursos apresentados.</p>
        <br />

        <h2>Perguntas Frequentes</h2>
        <p><strong>Como Acesso Meu Curso?</strong><br />
        Você receberá as informações por e-mail. No momento da compra é pedido para que seja informado seus dados e partir deles vocês receberá todo o material, tendo algumas opções de formatos, como: Vídeo, E-book, Aplicativo, etc.
        </p>
        <p><strong>Qual a Duração do Curso?</strong><br />
        Depende de cada produtor, de qualquer forma todas as informações estão dispostas na página de detalhes do cursos em <strong>Leia Mais</strong>.
        </p>
        <p><strong>Qual a forma de Pagamento?</strong><br />
        Cada produtor escolhe a forma que quer receber o pagamento, mas no geral varia de acordo com o valor do produto, podendo chegar até 12x no cartão.
        </p>
        <p><strong>Recebo Certificado?</strong><br />
        Depende do curso escolhido mas o mais importante é o conhecimento e saber executar o que foi aprendido.
        </p>
        <p><strong>Como entrar em contato com o criador do curso?</strong><br />
         Na página de pagamento ou em detalhes do curso em <strong>Leia Mais</strong> o contato do criador do curso é informado.
        </p>
        <p><strong>Posso fazer o cancelamento?</strong><br />
         O cancelamento depende do formato do curso e do produtor, mas recomenda-se ler todas as informações do cursos e se possível entrar em contato com o criador do conteúdo se necessário.
        </p>


        <br />
        <h2>Contato</h2>
        <p>Qualquer dúvida em relação ao funcionamento ou sugestões ao site, pode ser esclarecida através do email <strong>contato@laboratoriodesabios.com</strong></p>
      </div>
    )
  }
}
