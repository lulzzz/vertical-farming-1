/**
 * Created by alexanderlerma on 2/27/17.
 */

import {Sensor} from "./base.model";

export class Ph extends Sensor {


  constructor(name: string, room: number, rack: number, createdAt: Date, modifiedAt: Date, data: number, type: number) {
    super(name, room, rack, createdAt, modifiedAt, data, "ph");
  }
}
