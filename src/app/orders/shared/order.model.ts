export class OrderDetailsAttribute {

  constructor (
    public productId: number,
    public quantity: number
  ) { }

  public makeRequestBody(): any {
    return {
      product_id: this.productId,
      quantity: this.quantity,
    };
  }

}

export class OrderDetail {

  constructor (
    public id: number,
    public quantity: number,
    public amount: number,
    public product_name: string
  ) { }

}

export class Order {

  constructor (
    public id: number,
    public date: string,
    public purchased_at: string | null,
    public delivered_at: string | null,
    public order_details: OrderDetail[]
  ) { }

}
