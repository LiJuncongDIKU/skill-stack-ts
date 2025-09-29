// 使用reactive实现一个form表单的hook
import { reactive } from 'vue';

export function useReactiveForm(initData: Record<string, any>) {
  const temp = { ...initData };
  const formState = reactive(initData);
  const keys = Object.keys(initData); // 更新和重置时，全量不多不少
  function resetForm() {
    // 重置表单逻辑
    keys.forEach(key => {
      formState[key] = temp[key];
    });
  }
  function setForm(data: Record<string, any>) {
    keys.forEach(key => {
      formState[key] = data[key];
    });
  }
  return { formState, resetForm, setForm };
}