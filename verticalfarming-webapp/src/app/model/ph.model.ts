/**
 * Created by alexanderlerma on 2/27/17.
 */

import {BaseSensor} from "./base.model";

export class Ph extends BaseSensor {

  private _ph: number;

  constructor(name: string, room: number, rack: number, ph: number) {
    super(name, room, rack);
    this._ph = ph;
  }


  get ph(): number {
    return this._ph;
  }
}
