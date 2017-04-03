import {Sensor} from "../../model/sensor/sensor.model";
/**
 * Created by alexanderlerma on 3/27/17.
 */
export interface SensorService {
  getAll(): Promise<Sensor[]>;
  getById(id: number): Promise<Sensor[]>;
}
