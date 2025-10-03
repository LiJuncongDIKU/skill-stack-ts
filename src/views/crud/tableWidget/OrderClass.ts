import { Matcher, type trans } from "./Matcher";

export const ORDER_STATUS: trans[] = [
  { label: "已下单", value: 0 },
  { label: "已付款", value: 1 },
  { label: "已发货", value: 2 },
  { label: "已完成", value: 3 },
];
type OrderStatus = typeof ORDER_STATUS[number]['value'];


// 定义构造函数参数类型
interface OrderParams {
  id: number;
  userName: string;
  orderDate: Date | string;  // 支持Date对象或ISO格式字符串
  orderStatus: OrderStatus;
}

export class Order {
  public readonly id: number;
  public userName: string;
  public orderDate: Date;
  public orderStatus: OrderStatus;
  public static statusMatcher = new Matcher(ORDER_STATUS);
  public orderStatusText: string;
  constructor(params: OrderParams) {
    this.id = params.id;
    this.userName = params.userName;
    // 处理日期输入（支持Date对象或字符串）
    this.orderDate = typeof params.orderDate === 'string'
      ? new Date(params.orderDate)
      : params.orderDate;
    this.orderStatus = params.orderStatus;
    this.orderStatusText = Order.statusMatcher.match(this.orderStatus);
  }
}