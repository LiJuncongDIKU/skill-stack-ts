import { authAxios, publicAxios } from './request'

export default {
  getLoginInfo: authAxios.defineApi('/getLoginInfo'),
  getVerifyCode: publicAxios.defineApi('/getVerifyCode'),
  login: publicAxios.defineApi('/login'),
}