# 补充
+ 这里的层次说明，是希望体现业务对象 `Order` 类对接口和实际组件的承上启下作用
+ `Order` 获取详情、新增、删除等，均从同一个层次出发，无论写不写成类
+ 如果我们能把经典业务逻辑把控在`model层`, 则单文件组件的逻辑将自然顺畅
```ts
export class Order {
  // 成员字段
  public readonly id?: string;
  public userName: string;
  public orderDate: Date;
  public orderStatus: OrderStatus;
  public orderStatusText: string;
  public orderDateText: string;
  public desc?: string;
  // 函数
  public static saveOrder(params: OrderParams): Promise<AxiosResponse>{};
  public updateOrder(params: OrderParams): Promise<Order>{};
  public getDetailById(id: string): Promise<Order>{};
  public deleteSelf(): Promise<AxiosResponse>{};
}
```