import {ISensor} from "../sensor/sensor.interface";
/**
 * Created by alexanderlerma on 4/17/17.
 */
export class Rack {
  constructor(private _name: string, private _sensors: {[key: string] : Array<ISensor>}){}


  get name(): string {
    return this._name;
  }

  get sensors(): any {
    return this._sensors;
  }

  get sensorNames(): any {
    return Object.keys(this.sensors);
  }
}
