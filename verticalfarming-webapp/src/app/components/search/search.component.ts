/**
 * Created by alexanderlerma on 2/27/17.
 */
import {Component, OnInit, PipeTransform, Pipe} from "@angular/core";
import {SearchService} from "../../service/search/search.service";
import {Subject} from "rxjs";
import {SearchUtil} from "../../util/search/search.util";
import {ISensor} from "../../model/sensor/sensor.interface";
import {Room} from "../../model/room/room.model";
import {Rack} from "../../model/room/rack.model";

@Component({
  selector: 'vf-search',
  templateUrl: './search.component.html',
  providers: [SearchService]
})
export class VFSearchComponent implements OnInit {

  rooms: Room[];
  term$ = new Subject<string>();

  constructor(private service: SearchService) {
  }

  ngOnInit() {
    this.service
      .search(this.term$)
      .subscribe(results => {
        const roomGrouped = SearchUtil.groupBy(results as ISensor[], 'room');
        this.rooms = Object.keys(roomGrouped).map(key => {
          const rackGrouped = SearchUtil.groupBy(roomGrouped[key], 'rack');
          const racks: Rack[] = Object.keys(rackGrouped).map(x => {
            const sensorGrouped: any = SearchUtil.groupBy(rackGrouped[x], 'type');
            return new Rack(x, sensorGrouped);
          });
          return new Room(key, racks);
        });
      });
  }
}
