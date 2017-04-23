import {ISensor} from "../model/sensor/sensor.interface";
/**
 * Created by alexanderlerma on 4/17/17.
 */

export class VfUtil {

  public static groupBy(result: any, key: string) : {[key : string] : ISensor[]} {
    const grouped : {[key : string] : ISensor[]} = {};
    result.forEach((sensor) => {
      if (grouped[sensor[key]]) {
        grouped[sensor[key]].push(sensor);
      } else {
        grouped[sensor[key]] = [sensor];
      }
    });
    return grouped;
  }
}
