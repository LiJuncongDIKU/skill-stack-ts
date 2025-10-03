import { authAxios } from './request'

export default {
  getOrderPage: authAxios.defineApi('/order/page')
}