// 使用reactive实现一个form表单的hook解释：为什么Vue快，为什么应该多写hook
import { reactive } from 'vue';

export function useReactiveForm(initData: Record<string, any>) {
  // 更新和重置时，应该以硬编码初始化的对象为模板
  const temp = structuredClone(initData);
  const formState = reactive(initData);
  const keys = Object.keys(initData);
  // 重置表单逻辑
  function resetForm() {
    keys.forEach(key => {
      if (typeof temp[key] === 'object') {
        // 防止对象引用污染 temp
        formState[key] = structuredClone(temp[key]);
      } else {
        formState[key] = temp[key];
      }
    });
  }
  function setForm(data: Record<string, any>) {
    keys.forEach(key => {
      formState[key] = data[key];
    });
  }
  // 这里可以封一个满足一般CRUD业务的查询参数方案：返回有效值数据，不返回空数组
  function getCleanForm4Query() {
    const res: Record<string, any> = {};
    keys.forEach(k => {
      const val = formState[k];
      const isEmptyArray = Array.isArray(val) && val.length === 0;
      if (isEmptyArray || val === undefined || val === null) {
        return;
      }
      res[k] = val;
    })
    return res;

  }
  // 封装初始化、重置的逻辑
  return { formState, resetForm, setForm, getCleanForm4Query };
}