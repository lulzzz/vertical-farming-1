/**
 * Created by alexanderlerma on 2/27/17.
 */
import {BaseSensor} from "./base.model";

export class Temperature extends BaseSensor {

  private _temperature: number;

  constructor(name: string, room: number, rack: number, temperature: number) {
    super(name, room, rack);
    this._temperature = temperature;
  }

  get temperature(): number {
    return this._temperature;
  }
}
