import {ImageMetadata} from "./imageMetadata";

export class Image {
  constructor(private _publicId: string, private _src: string, private _metadata: ImageMetadata) {
  }
  get publicId(): string {
    return this._publicId;
  }
  get src(): string {
    return this._src;
  }
  get metadata(): ImageMetadata {
    return this._metadata;
  }
}
