import axios from 'axios'

const api = axios.create({
  baseUrl: 'http://localhost:3333/allCourses'
})

export default api