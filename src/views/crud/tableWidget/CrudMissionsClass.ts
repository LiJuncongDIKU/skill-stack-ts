import { reactive } from 'vue';
import hookUrl from '../../../assets/icon/hook.svg?url';
import type { codeFile } from '../../about/Description';
import readMd from './read.md?raw';

export type mission = {
  activeUrl: string,
  isActive: boolean,
  id: string,
  activeLabel?: string,
  fileList?: codeFile[],
};
export class CrudMissionClass {
  public static state = reactive<mission[]>([
    { activeUrl: hookUrl, isActive: false, id: 'useFormHook', activeLabel: "增Create：表单hook", },
    {
      activeUrl: hookUrl, isActive: false, id: 'usePageApiHook', activeLabel: "查Read：分页hook",
      fileList: [{ name: "分页介绍", content: readMd, lang: 'md' }],
    },
    { activeUrl: hookUrl, isActive: false, id: 'object' },
    { activeUrl: hookUrl, isActive: false, id: 'usePag' },
  ]);
  public static setMissionFlag(id: string, flag: boolean): void {
    const mission = CrudMissionClass.state.find((val) => val.id === id);
    if (!mission) {
      return;
    }
    mission.isActive = flag;
  }
}