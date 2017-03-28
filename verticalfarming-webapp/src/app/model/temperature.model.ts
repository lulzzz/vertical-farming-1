/**
 * Created by alexanderlerma on 2/27/17.
 */
import {Sensor} from "./base.model";

export class Temperature extends Sensor {

  constructor(name: string, room: number, rack: number, createdAt: Date, modifiedAt: Date, data: number, type: string) {
    super(name, room, rack, createdAt, modifiedAt, data, "temperature");
  }
}
