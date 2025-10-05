import Mock from 'mockjs/dist/mock.js'

export const localMock: Record<string, { handler: Function }> = {
  '/order/page': {
    handler: (params: any) => {
      const { pageNo, pageSize } = params;
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
      return Mock.mock(mockOption)
    }
  },
  '/order/add': {
    handler: () => {
      return { message: "成功" }
    }
  },
  '/order/delete': {
    handler: () => {
      return { message: "成功" }
    }
  },
  '/order/get': {
    handler: () => {
      return Mock.mock({
        id: '@id',
        'userName': '@cname()',
        'orderDate': '@datetime()',
        'orderStatus|0-3': 1,
        'desc': '@cword(15,30)'
      })
    }
  },
};