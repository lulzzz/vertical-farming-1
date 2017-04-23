/**
 * Created by alexanderlerma on 4/17/17.
 */

export class VFUtils {

  public static groupBy(result: any, key: string) : {[key : string] : any[]} {
    const grouped : {[key : string] : any[]} = {};
    result.forEach((sensor) => {
      if (grouped[sensor[key]]) {
        grouped[sensor[key]].push(sensor);
      } else {
        grouped[sensor[key]] = [sensor];
      }
    });
    return grouped;
  }

  public static capitalizer = (str : string) => (str.charAt(0).toUpperCase() + str.slice(1));

}
