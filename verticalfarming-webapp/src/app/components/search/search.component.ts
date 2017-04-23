/**
 * Created by alexanderlerma on 2/27/17.
 */
import {Component, OnInit, PipeTransform, Pipe, Output, EventEmitter} from "@angular/core";
import {SearchService} from "../../service/search/search.service";
import {Subject, Observable} from "rxjs";
import {VfUtil} from "../../util/vf.util";
import {ISensor} from "../../model/sensor/sensor.interface";
import {Room} from "../../model/room/room.model";
import {Rack} from "../../model/room/rack.model";
import {Sensor} from "../../model/sensor/sensor.model";

@Component({
  selector: 'vf-search',
  templateUrl: './search.component.html',
  providers: [SearchService]
})
export class VFSearchComponent {
  @Output() onResults = new EventEmitter<Room[]>();
  @Output() onSelected = new EventEmitter<Room>();
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private service: SearchService) {}

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this.service.search(term)
          .do(() => this.searchFailed = false)
          .do((results) => this.emitResults(results))
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false);

  emitResults(results : Room[]) {
    this.onResults.emit(results);
  }

  emitSelected(selected: any) {
    this.onSelected.emit(selected.item as Room);
  }


  formatter = (x: {name: string}) => x.name;

}
