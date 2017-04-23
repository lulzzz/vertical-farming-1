import {ISensor} from "../sensor/sensor.interface";
import {VfUtil} from "../../util/vf.util";
import {Rack} from "../room/rack.model";
import {Room} from "../room/room.model";
/**
 * Created by alexanderlerma on 4/21/17.
 */
export class ModelUtil {
  public static sensorsToRooms(results: ISensor[]) : Room[] {
    const roomGrouped : {[room: string] : ISensor[]} = VfUtil.groupBy(results as ISensor[], 'room');
    const rooms = Object.keys(roomGrouped)
      .map(key => {
        const rackGrouped = VfUtil.groupBy(roomGrouped[key], 'rack');
        const racks: Rack[] = Object.keys(rackGrouped)
          .map(x => {
            const sensorGrouped: any = VfUtil.groupBy(rackGrouped[x], 'type');
            Object.keys(sensorGrouped)
              .forEach(key => {
                sensorGrouped[key].sort((a, b) => b.createdAt - a.createdAt);
              });
            return new Rack(x, sensorGrouped);
          })
          .sort((a, b) => a.name.localeCompare(b.name));
        return new Room(key, racks);
      });
    return rooms.sort((a, b) => a.name.localeCompare(b.name));
  }
}
