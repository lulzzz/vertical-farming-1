import {Rack} from "./rack.model";
/**
 * Created by alexanderlerma on 4/17/17.
 */
export class Room {
  constructor(private _name: string, private _racks: Array<Rack>){}


  get name(): string {
    return this._name;
  }

  get racks(): Array<Rack> {
    return this._racks;
  }
}
