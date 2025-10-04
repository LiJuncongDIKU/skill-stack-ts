import { authAxios } from './request'

export default {
  getOrderPage: authAxios.defineApi('/order/page'),
  addOrder: authAxios.defineApi('/order/add'),
}