import axios from 'axios'

const api = axios.create({
  //baseURL: 'https://backend-api-laboratorio-sabios.herokuapp.com/laboratorio/'
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/paises/'
})



export default api