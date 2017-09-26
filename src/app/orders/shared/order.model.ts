export class OrderDetailsAttribute {

  constructor (
    public productId: number,
    public quantity: number
  ) { }

  public toObject() : any {
    return {
      product_id: this.productId,
      quantity: this.quantity
    }
  }

}

export class Order {

  constructor (
    public orderDetailsAttributes: OrderDetailsAttribute[]
  ) { }

  public toObject() : any {
    return {
      order_details_attributes: this.orderDetailsAttributes.map((order) => order.toObject())
    }
  }

}
