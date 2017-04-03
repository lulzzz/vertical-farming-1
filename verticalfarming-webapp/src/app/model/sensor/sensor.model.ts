/**
 * Created by alexanderlerma on 2/28/17.
 */
export class Sensor {

  constructor(private _name: string,
              private _room: number,
              private _rack: number,
              private _createdAt: Date,
              private _modifiedAt: Date,
              private _data: number,
              private _type: string) {}


  get name(): string {
    return this._name;
  }

  get room(): number {
    return this._room;
  }

  get rack(): number {
    return this._rack;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }

  get data(): number {
    return this._data;
  }

  get type(): string {
    return this._type;
  }
}

