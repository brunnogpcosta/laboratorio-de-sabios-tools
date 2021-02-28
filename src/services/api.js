import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-api-laboratorio-sabios.herokuapp.com/laboratorio/'
})


export default api