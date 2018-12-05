export class Image {
  constructor(private _publicId: string, private _src: string, private _caption: any) {
  }
  get publicId(): string {
    return this._publicId;
  }
  get src(): string {
    return this._src;
  }
  get caption(): any {
    return this._caption;
  }
}
