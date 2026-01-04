import { onUnmounted } from 'vue';

export function useScriptTag(
  url: string,
  onSuccess?: () => void,
  onError?: () => void
) {
  let script: HTMLScriptElement | null = null;
  let promise: Promise<void> | null = null;

  const loadScript = (): Promise<void> => {
    // 检查脚本是否已经存在
    const existingScript = document.querySelector(`script[src="${url}"]`) as HTMLScriptElement;
    if (existingScript) {
      // 如果脚本已经存在且已加载，直接调用成功回调
      if (existingScript.dataset.loaded === 'true') {
        return Promise.resolve();
      }
      // 否则等待现有脚本加载完成
      return new Promise((resolve, reject) => {
        existingScript.addEventListener('load', () => resolve());
        existingScript.addEventListener('error', () => reject());
      });
    }

    return new Promise((resolve, reject) => {
      script = document.createElement('script');
      script.src = url;
      script.async = true;

      script.onload = () => {
        script!.dataset.loaded = 'true';
        if (onSuccess) {
          onSuccess();
        }
        resolve();
      };

      script.onerror = () => {
        if (onError) {
          onError();
        }
        reject(new Error(`Failed to load script: ${url}`));
      };

      document.head.appendChild(script);
    });
  };

  // 立即加载脚本
  promise = loadScript();

  // 组件卸载时清理脚本标签
  onUnmounted(() => {
    if (script) {
      document.head.removeChild(script);
      script = null;
    }
  });

  return {
    promise,
    load: loadScript,
    remove: () => {
      if (script) {
        document.head.removeChild(script);
        script = null;
      }
    }
  };
}