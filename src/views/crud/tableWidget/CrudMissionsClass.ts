import { reactive } from 'vue';
// import hookUrl from '../../../assets/icon/hook.svg?url';
import letterC from '../../../assets/icon/letter-c.svg?url';
import letterR from '../../../assets/icon/letter-r.svg?url';
import letterU from '../../../assets/icon/letter-u.svg?url';
import letterD from '../../../assets/icon/letter-d.svg?url';
import type { codeFile } from '../../about/Description';
import readMd from './read.md?raw';
import usePageApiTxt from '../../../hooks/usePageApi.ts?raw';
import useReactiveFormTxt from '../../../hooks/useForm.ts?raw';
import clientApiTxt from '../../../apis/client.api.ts?raw';
import requestTxt from '../../../code4show/framework/request.ts?raw'
import OrderTxt from './OrderClass?raw';
import OrderDialogTxt from './OrderDialog.vue?raw';
import updatePlusTxt from './updatePlus.md?raw';


export type mission = {
  activeUrl: string,
  isActive: boolean,
  id: string,
  activeLabel?: string,
  fileList?: codeFile[],
};
export class CrudMissionClass {
  public static state = reactive<mission[]>([
    {
      activeUrl: letterC, isActive: false, id: 'useFormHook', activeLabel: "增Create：表单hook",
      fileList: [
        { name: "源文件useForm.ts", content: useReactiveFormTxt }
      ],
    },
    {
      activeUrl: letterR, isActive: false, id: 'usePageApiHook', activeLabel: "查Read：分页hook",
      fileList: [
        { name: "分页介绍", content: readMd, lang: 'md' },
        { name: "源文件usePageApi.ts", content: usePageApiTxt, },
      ],
    },
    {
      activeUrl: letterU, isActive: false, id: 'update-id', activeLabel: "更新Update：基本跟新增一样，来看看层次结构吧",
      fileList: [
        { name: '说明', content: updatePlusTxt, lang:'md' },
        { name: '接口层：二封Axios', content: requestTxt },
        { name: '接口层：api模块定义', content: clientApiTxt },
        { name: 'model层：业务类的编写', content: OrderTxt },
        { name: 'viewModel层组件', content: OrderDialogTxt },
      ],
    },
    { activeUrl: letterD, isActive: false, id: 'delete-id', activeLabel: "删Delete：这里暂时没想到写什么" },
  ]);
  public static setMissionFlag(id: string, flag: boolean): void {
    const mission = CrudMissionClass.state.find((val) => val.id === id);
    if (!mission) {
      return;
    }
    mission.isActive = flag;
  }
}