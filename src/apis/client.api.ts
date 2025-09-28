import { authAxios } from './request'

export default {
  login: authAxios.defineApi('/login')
}