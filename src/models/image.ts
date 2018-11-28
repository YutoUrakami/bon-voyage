export class Image {
  constructor(private _publicId: string, private _src: string, private _show: boolean = false) {
  }
  get publicId(): string {
    return this._publicId;
  }
  get src(): string {
    return this._src;
  }
  get show(): boolean {
    return this._show;
  }
  set show(show: boolean) {
    this._show = show;
  }
}

export const toViewableArray = (array: Image[], viewableIndex: number): Image[] => {
  return array.map((img, index) => {
    img.show = index === viewableIndex;
    return img
  });
};
