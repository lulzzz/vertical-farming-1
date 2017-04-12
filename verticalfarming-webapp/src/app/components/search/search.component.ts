/**
 * Created by alexanderlerma on 2/27/17.
 */
import {Component, OnInit} from "@angular/core";
import {SearchService} from "../../service/search/search.service";
import {Subject} from "rxjs";
import {Sensor} from "../../model/sensor/sensor.model";
import {ISensor} from "../../model/sensor/sensor.interface";

@Component({
  selector: 'vf-search',
  templateUrl: './search.component.html',
  providers: [SearchService]
})
export class VFSearchComponent implements OnInit {

  items: Array<string>;
  term$ = new Subject<string>();

  constructor(private service: SearchService) {}

  ngOnInit() {
    this.service.search(this.term$).subscribe(results => this.items = results.map(x => JSON.stringify(x)));
  }
}
