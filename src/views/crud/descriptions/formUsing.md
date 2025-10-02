# useForm 的讨论
处理代码段 dev
```JS
const { formState: form, resetForm, setForm } = useReactiveForm({
  name: '',
  age: 18,
  sex: 'unknown',
  email: '',
  tags: [],
  books: [],
});
```