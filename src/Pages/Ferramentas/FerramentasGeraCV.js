import React, { Component } from 'react'
import { Link } from 'react-router-dom';



import './FerramentasGeraCV.css'


export default class FerramentasGeraCV extends Component {


  state = {
    nome: "",
    nacionalidade: "",
    estadoCivil: "",
    idade: "",
    endereco: "",
    telefone: "",
    email: "",
    objetivo: "",
    formacao: [],
    cursos: [],
    experiencia: [],
    sobreMim: ""
  }



  insertFormation() {
    const formation = document.querySelector('#formacao label')
    const botaoFormacao = document.querySelector('.botaoFormacao')
    const novoInput = document.createElement('input')

    novoInput.setAttribute("name", "formacao");
    novoInput.setAttribute("placeholder", "Ex.: Ensino Médio completo no Colégio Laboratório de Sábios – Meu Bairro – Minha Cidade - UF , concluído em XXXX");
    formation.insertBefore(novoInput, botaoFormacao);
  }

  insertCourses() {
    const courses = document.querySelector('#conhecimentos label')
    const botaoConhecimento = document.querySelector('.botaoConhecimento')
    const novoInputConhecimento = document.createElement('input')

    novoInputConhecimento.setAttribute("name", "conhecimentos");
    novoInputConhecimento.setAttribute("placeholder", "Ex.: Curso de Programação FullStack - Allura");
    courses.insertBefore(novoInputConhecimento, botaoConhecimento);
  }

  insertExperiencia() {
    const empresa = document.querySelector('input[name="empresa"]').value
    const anoInicio = document.querySelector('input[name="anoInicio"]').value
    const anoFim = document.querySelector('input[name="anoFim"]').value
    const cargo = document.querySelector('input[name="cargo"]').value
    const experiencia = document.querySelector('input[name="experiencia"]').value

    if ((empresa || anoInicio || anoFim || cargo || experiencia) == "") {
      alert("É necerrário preencher todos os campos da experiencia atual para adionar outra experiência.")
    } else {
      const experienciaLabel = document.querySelector('#experiencia label')
      const inputExperiencia = document.querySelector('input[name="experiencia"]')
      const botaoExperiencia = document.querySelector('.botaoExperiencia')

      const novoDivExperiencia = document.createElement('div')
      novoDivExperiencia.setAttribute("class", "experienciaContent");

      const novoInputExperienciaEmpresa = document.createElement('input')
      novoInputExperienciaEmpresa.setAttribute("name", "empresa");
      novoInputExperienciaEmpresa.setAttribute("placeholder", "Nome da Empresa");

      const novoInputExperienciaAnoInicio = document.createElement('input')
      novoInputExperienciaAnoInicio.setAttribute("name", "anoInicio");
      novoInputExperienciaAnoInicio.setAttribute("type", "number");
      novoInputExperienciaAnoInicio.setAttribute("placeholder", "Ano de Início");

      const novoInputExperienciaAnoFim = document.createElement('input')
      novoInputExperienciaAnoFim.setAttribute("name", "anoFim");
      novoInputExperienciaAnoFim.setAttribute("type", "number");
      novoInputExperienciaAnoFim.setAttribute("placeholder", "Ano de Fim");


      const novoInputCargo = document.createElement('input')
      novoInputCargo.setAttribute("name", "cargo");
      novoInputCargo.setAttribute("placeholder", "Cargo");

      const novoInputExperiencia = document.createElement('input')
      novoInputExperiencia.setAttribute("name", "experiencia");
      novoInputExperiencia.setAttribute("placeholder", "Ex.: Abertura e fechamento de caiza, nota fiscal...");

      novoDivExperiencia.appendChild(novoInputExperienciaEmpresa);
      novoDivExperiencia.appendChild(novoInputExperienciaAnoInicio);
      novoDivExperiencia.appendChild(novoInputExperienciaAnoFim);
      novoDivExperiencia.appendChild(novoInputCargo);
      novoDivExperiencia.appendChild(novoInputExperiencia);

      experienciaLabel.insertBefore(novoDivExperiencia, botaoExperiencia)

    }
  }

  formataEGeraPDF() {
    const nome = document.querySelector('input[name="name"]').value.toUpperCase()
    const nacionalidade = document.querySelector('input[name="nacionalidade"]').value
    const estadoCivil = document.querySelector('select[name="estadoCivil"]').value
    const idade = document.querySelector('input[name="idade"]').value
    const endereco = document.querySelector('input[name="endereco"]').value
    const telefone = document.querySelector('input[name="telefone"]').value
    const email = document.querySelector('input[name="email"]').value
    const objetivo = document.querySelector('input[name="objetivo"]').value

    const formacao = document.querySelectorAll('input[name="formacao"]')
    let formacaoArray = []
    formacao.forEach(element => { if (element.value !== "") { formacaoArray.push(element.value) } });

    const cursos = document.querySelectorAll('input[name="conhecimentos"]')
    let cursosArray = []
    cursos.forEach(element => { if (element.value !== "") { cursosArray.push(element.value) } });


    const experienciaLabel = document.querySelectorAll('#experiencia .experienciaContent')


    let experienciaArray = []

    experienciaLabel.forEach(element => {

      if (element.childNodes[4].value === "") {

      } else {
        experienciaArray.push({
          empresa: element.childNodes[0].value,
          anoInicio: element.childNodes[1].value,
          anoFim: element.childNodes[2].value,
          cargo: element.childNodes[3].value,
          expe: element.childNodes[4].value,
        })
      }

    });

    const sobreMim = document.querySelector('input[name="sobreMim"]').value
    if (sobreMim === "") {

    } else {
      this.setState({ nome: nome, nacionalidade: nacionalidade, estadoCivil: estadoCivil, idade: idade, endereco: endereco, telefone: telefone, email: email, objetivo: objetivo, formacao: formacaoArray, cursos: cursosArray, experiencia: experienciaArray, sobreMim: sobreMim })
    }


  }






  render() {
    const { nome, nacionalidade, estadoCivil, idade, endereco, telefone, email, objetivo, formacao, cursos, experiencia, sobreMim } = this.state

    return (

      <div id="container">
        <div className="spamViewCV"></div>


        <div id="titleContent">
        </div>


        <div id="cursosContentFerramentasCV">
          <form onClick={() => this.formataEGeraPDF()}>
            <div id="cabecalho">
              <label>
                <strong>Dados Pessoais</strong>
                <input type="text" name="name" placeholder="Nome" />

                <div className="tresInputs">
                  <input type="text" name="nacionalidade" placeholder="Nacionalidade" />
                  <select id="estadoCivil" name="estadoCivil">
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                  </select>
                  <input type="number" min="14" name="idade" placeholder="Idade" />

                </div>

                <input type="text" name="endereco" placeholder="Ex.: Rua Laboratório de Sábios, 777 - Taquara - Rio de Janeiro - CEP: XXXXX-XXX" />
                <div className="tresInputs">
                  <input type="tel" required="required" maxlength="15" name="telefone" placeholder="(21) XXXXX-XXXX" />
                  <input type="email" required="required" class="input-text" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="email@email.com" />
                </div>
              </label>
            </div>

            <div id="objetivo">
              <label>
                <strong>Objetivo</strong>
                <input type="text" name="objetivo" placeholder="Ex.: Fazer parte do quadro funcional da empresa, agregando conhecimentos, contribuindo para execução e desenvolvimento de suas atividades." />
              </label>
            </div>

            <div id="formacao">
              <label>
                <strong>Formação</strong>
                <input type="text" name="formacao" placeholder="Ex.: Ensino Médio completo no Colégio Laboratório de Sábios – Meu Bairro – Minha Cidade - UF , concluído em XXXX" />
                <div className="botaoFormacao" onClick={() => this.insertFormation()}>+</div>
              </label>
            </div>

            <div id="conhecimentos">
              <label>
                <strong>Cursos e Conhecimentos</strong>
                <input type="text" name="conhecimentos" placeholder="Ex.: Curso de Programação FullStack - Allura" />
                <div className="botaoConhecimento" onClick={() => this.insertCourses()}>+</div>

              </label>
            </div>

            <div id="experiencia">
              <label>
                <strong>Experiência Profissional</strong>

                <div className="experienciaContent">
                  <input type="text" name="empresa" placeholder="Nome da Empresa" />
                  <input type="number" name="anoInicio" placeholder="Ano de Início" />
                  <input type="number" name="anoFim" placeholder="Ano de Saída" />
                  <input type="text" name="cargo" placeholder="Cargo" />
                  <input type="text" name="experiencia" placeholder="Ex.: Abertura e fechamento de caiza, nota fiscal..." />
                </div>

                <div className="botaoExperiencia" onClick={() => this.insertExperiencia()}>+</div>

              </label>
            </div>


            <div id="sobreMim">
              <label>
                <strong>Sobre Mim</strong>
                <input type="text" name="sobreMim" placeholder="Ex.: Sou uma pessoa com facilidade em aprender, vontade de crescer, sempre visando a evolução como profissional." />
              </label>
            </div>
            <br /> <Link to={{
              pathname: `/visualizaCurriculo`,
              state: {
                nome: nome,
                nacionalidade: nacionalidade,
                estadoCivil: estadoCivil,
                idade: idade,
                endereco: endereco,
                telefone: telefone,
                email: email,
                objetivo: objetivo,
                formacao: formacao,
                cursos: cursos,
                experiencia: experiencia,
                sobreMim: sobreMim
              }
            }} >
              <input type="button" value="Visualizar PDF" />
            </Link>

          </form>

        </div>

      </div >

    )
  }
}
