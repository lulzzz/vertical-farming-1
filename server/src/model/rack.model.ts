import {ISensor} from "./interfaces/sensor/base/base.sensor";
/**
 * Created by alexanderlerma on 2/21/17.
 */
class Rack {
    private name: string;
    private sensors: ISensor[];

    constructor(name: string, sensors: ISensor[]) {
        this.name = name;
        this.sensors = sensors;
    }

    public addSensor(sensor: ISensor): void {
        this.sensors.push(sensor);
    }
}