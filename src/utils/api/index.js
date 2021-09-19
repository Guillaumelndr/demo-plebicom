import axios from 'axios'
import i18n from 'utils/i18n'

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    accept: 'application/ld+json',
    'Accept-Language': i18n.language
  }
})

export default api
