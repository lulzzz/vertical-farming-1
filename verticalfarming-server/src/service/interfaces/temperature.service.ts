/**
 * Created by alexanderlerma on 2/15/17.
 */
import {ISensorService} from "./base/base.service";
import {ISensor} from "../../model/interfaces/sensor/base.sensor";

export interface ITemperatureService extends ISensorService<ISensor> {
}
