/**
 * Created by alexanderlerma on 2/28/17.
 */
export class BaseSensor {

  private _name: string;
  private _room: number;
  private _rack: number;

  constructor(name: string, room: number, rack: number) {
    this._name = name;
    this._room = room;
    this._rack = rack;
  }


  get name(): string {
    return this._name;
  }

  get room(): number {
    return this._room;
  }

  get rack(): number {
    return this._rack;
  }
}
