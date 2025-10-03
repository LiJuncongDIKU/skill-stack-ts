import { reactive, ref } from "vue"

export function usePageApi(api: Function) {
  // 传入一个封装好的api, 这个不同业务通常有标准的返回格式
  const pageNo = ref(1);
  const pageSize = ref(10);
  let list = reactive([]); // 分页接口的返回一定是一个数组
  const loading = ref(false);
  const queryWithParams = (params: Record<string, any>) => {
    // 查询的时候默认查询第一页
    pageNo.value = 1;
    const data = {
      ...params,
      pageNo: pageNo.value,
      pageSize: pageSize.value
    };
    loading.value = true;
    // 这里当然还可以定制插如 AxiosRequestOption相关的功能
    return api(data).then((result: any) => {
      console.log(result)
      // 格式化地处理数组
      list = result.list || [];
      return result;
    }).catch(() => {
      // 也可以在这处理失败，但是通常由api二封时就统一处理
    }).finally(() => {
      loading.value = false;
    })
  }
  return { pageNo, pageSize, list, loading, queryWithParams };
}