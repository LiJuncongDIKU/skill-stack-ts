import { authAxios } from './request'

export default {
  getOrderPage: authAxios.defineApi('/order/page'),
  addOrder: authAxios.defineApi('/order/add'),
  getOrderById: authAxios.defineApi('/order/get', { method: 'get' }),
  updateOrder: authAxios.defineApi('/order/update'),
  deleteOrder: authAxios.defineApi('/order/delete')
}