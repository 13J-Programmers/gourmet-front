export class Group {
  constructor (
    public id: number,
    public name: string,
  ) { }

  public static buildFromApiResponse(obj: any) : Group {
    return new Group(obj.id, obj.name);
  }

}
