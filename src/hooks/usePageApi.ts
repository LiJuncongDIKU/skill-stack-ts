import { reactive, ref, watch } from "vue";
import type { AxiosRequestConfig } from "axios";

export function usePageApi(api: (data: any, config?: AxiosRequestConfig) => Promise<any>) {
  // 传入一个封装好的api, 这个不同业务通常有标准的返回格式
  const pageNo = ref(1);
  const pageSize = ref(20);
  const total = ref(0);
  const list = reactive<any>([]); // 分页接口的返回一定是一个数组
  const loading = ref(false);
  let paramsTemp:any = {}; // 点击查询时设置查询条件，分页切换时不改动

  const executeApi = () => {
    loading.value = true;
    // 这里当然还可以定制插如 AxiosRequestOption相关的功能
    return api(paramsTemp).then((result: any) => {
      // 格式化地处理数组
      list.splice(0, Infinity, ...(result?.data.list || []));
      total.value = result.data.total;
      return result;
    }).catch(() => {
      // 也可以在这处理失败，但是通常由api二封时就统一处理
    }).finally(() => {
      loading.value = false;
    })
  }

  const queryWithParams = (params: Record<string, any>) => {
    const data = {
      ...params,
      pageNo: 1, // 查询的时候默认查询第一页
      pageSize: pageSize.value
    };
    paramsTemp = data;
    if (pageNo.value === 1) {
      executeApi();
    } else {
      pageNo.value = 1;
    }
  }

  // pageNo和pageSize发生切换时，应该重新查询
  watch([pageNo], () => {
    paramsTemp.pageNo = pageNo.value;
    executeApi();
  })
  watch([pageSize], () => {
    paramsTemp.pageSize = pageSize.value;
    if (pageNo.value === 1) {
      executeApi();
    } else {
      pageNo.value = 1;
    }
  })


  return { pageNo, pageSize, list, loading,total, queryWithParams, refresh:executeApi };
}