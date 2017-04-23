/**
 * Created by alexanderlerma on 4/22/17.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Rack} from "../../model/room/rack.model";

@Component({
  selector: 'rack-detail',
  templateUrl: './rack-detail.component.html'
})
export class RackDetail {
  @Input() rack: Rack;
  @Output() onSelectedSensorName =  new EventEmitter<string>();

  emitSelectedSensor(sensorName: string) {
    this.onSelectedSensorName.emit(sensorName);
  }
}
