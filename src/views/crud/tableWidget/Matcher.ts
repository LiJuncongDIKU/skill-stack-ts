export type trans = {
  label: string,
  value: string | number,
}
export class Matcher {
  private mapping: Map<string | number, string> = new Map();
  constructor(list: trans[]) {
    list.forEach(row => {
      this.mapping.set(row.value, row.label);
    })
  }
  public match = (val:string|number):string => {
    const res = this.mapping.get(val);
    return res || '--';
  };
}