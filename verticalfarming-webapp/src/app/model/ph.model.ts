/**
 * Created by alexanderlerma on 2/27/17.
 */
export class Ph {

  private _name: string
  private _ph: number

  constructor(name: string, ph: number) {
    this._name = name;
    this._ph = ph;
  }

  get name(): string {
    return this._name;
  }

  get ph(): number {
    return this._ph;
  }
}
