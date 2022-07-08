import axios from 'axios'

const URL = 'https://restcountries.com/v3.1'

export const api = axios.create({
  baseURL: URL
})
