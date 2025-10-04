import { MockHandler } from 'vite-plugin-mock-server'
import Mock from 'mockjs/dist/mock.js'


const mockRules: MockHandler[] = [
  {
    pattern: '/api/auth/order/page',
    handle: (req, res) => {
      const { pageNo, pageSize } = req.body;
      const mockOption: any = {
        pageNo,
        pageSize,
        'total|50-1000': 100
      };
      mockOption[`list|${pageSize}`] = [{
        'id': '@id',
        'userName': '@cname()',
        'orderDate': '@datetime()',
        'orderStatus|0-3': 1
      }];
      const mockData = Mock.mock(mockOption)
      res.setHeader('Content-Type', 'application/json')
      setTimeout(() => {
        res.end(JSON.stringify(mockData))
      }, 1000);
    }
  },
  {
    pattern: '/api/auth/order/add',
    handle: (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      setTimeout(() => {
        res.end(JSON.stringify({ message: "成功" }))
      }, 1000);
    }
  }, {
    pattern: '/api/auth/order/delete',
    handle: (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      setTimeout(() => {
        res.end(JSON.stringify({ message: "成功" }))
      }, 1000);
    }
  },
  {
    pattern: '/api/auth/order/get',
    handle: (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      const mockData = Mock.mock({
        id: '@id',
        'userName': '@cname()',
        'orderDate': '@datetime()',
        'orderStatus|0-3': 1,
        'desc': '@word(15,30)'
      })
      setTimeout(() => {
        res.end(JSON.stringify(mockData))
      }, 1000);
    }
  },
]
export default mockRules;