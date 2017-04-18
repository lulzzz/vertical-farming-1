import {ISensor} from "../../model/sensor/sensor.interface";
/**
 * Created by alexanderlerma on 4/17/17.
 */

export class SearchUtil {

  public static groupBy(result: Array<ISensor>, key: string) : {[key : string] : ISensor[]} {
    return result.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
