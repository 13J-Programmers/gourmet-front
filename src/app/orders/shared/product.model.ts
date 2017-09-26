export class Product {

  constructor (
    public id: number,
    public name: string,
    public soldout: boolean,
    public description: string | null,
    public imageClass: string | null
  ) { }

  public static buildFromApiResponse(obj: any) : Product {
    return new Product(
      obj.id,
      obj.name,
      obj.soldout,
      obj.description,
      obj.image_class
    );
  }

}
