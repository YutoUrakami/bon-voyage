export class ImageMetadata {
  constructor(
    private _camera: string | null,
    private _lens: string | null,
    private _film: string | null,
    private _model: string | null
  ) {
  }
  get camera(): string | null {
    return this._camera;
  }
  get lens(): string | null {
    return this._lens
  }
  get film(): string | null {
    return this._film
  }
  get model(): string | null {
    return this._model
  }
}

export const emptyMetadata = new ImageMetadata(null, null, null, null);
