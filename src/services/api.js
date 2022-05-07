import axios from 'axios'
import { utils } from '../utils'
const { getCookie } = utils

const userToken = getCookie('userToken')
const baseUrl = 'http://restapi.adequateshop.com/api'

const api = userToken
  ? axios.create({
      baseURL: baseUrl,
      headers: { Authorization: `Bearer ${userToken}` },
    })
  : axios.create({
      baseURL: baseUrl,
    })

export default api
