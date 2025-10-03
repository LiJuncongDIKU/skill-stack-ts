import { type codeFile } from '../../about/Description';
import useFormTxt from '../../../hooks/useForm.ts?raw';
import formTxt from './formUsing.md?raw'

export const formDesc: codeFile[] = [
  { content: useFormTxt, name: 'hook：useReactiveForm.ts' },
  { content: formTxt, name: '组件使用例子', lang: "md" },
];