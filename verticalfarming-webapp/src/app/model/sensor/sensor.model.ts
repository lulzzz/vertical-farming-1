import {ISensor} from "./sensor.interface";
/**
 * Created by alexanderlerma on 2/28/17.
 */
export class Sensor implements ISensor {

  constructor(private _name: string,
              private _data: number,
              private _room: string,
              private _rack: string,
              private _type: string,
              private _createdAt?: Date,
              private _modifiedAt?: Date) {

  }


  get name(): string {
    return this._name;
  }

  get data(): number {
    return this._data;
  }

  get room(): string {
    return this._room;
  }

  get rack(): string {
    return this._rack;
  }

  get type(): string {
    return this._type;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get modifiedAt(): Date {
    return this._modifiedAt;
  }
}

