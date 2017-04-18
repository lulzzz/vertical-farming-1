import {ISensor} from "../../model/sensor/sensor.interface";
/**
 * Created by alexanderlerma on 3/27/17.
 */
export interface SensorService {
  getAll(): Promise<ISensor[]>;
  getById(id: number): Promise<ISensor[]>;
}
