import { MockHandler } from 'vite-plugin-mock-server'
import Mock from 'mockjs/dist/mock.js'

export default (): MockHandler[] => [
  {
    pattern: '/api/auth/order/page',
    handle: (req, res) => {
      console.log(req)
      const mockData = Mock.mock({
        'list|10': [{
          'id|+1': 1
        }]
      })
      res.end(JSON.stringify(mockData))
    }
  },
]