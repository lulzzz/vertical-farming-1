/**
 * Created by alexanderlerma on 4/22/17.
 */
import {Component, Input} from '@angular/core';
import {Room} from "../../model/room/room.model";

@Component({
  selector: 'vf-accordian',
  templateUrl: './vf-accordian.component.html'
})
export class VFAccordian {
  @Input() rooms: Room[];
  lastSelectedSensor: string;
  selectedSensor: string;
  selectedRack: string;
  selectedRoom: string;
  chartOpen = false;

  onSelectedSensorName(name: string) {
    if(name === this.lastSelectedSensor) {
      this.chartOpen = false;
    } else {
        this.chartOpen = !this.chartOpen;
    }
    this.selectedSensor = name;
    this.lastSelectedSensor = this.selectedRoom + this.selectedRack + name;
  }

  onSelectedRack(rack: string) {
    this.chartOpen = false;
    this.selectedRack = rack;
  }

  onSelectedRoom(room: string) {
    this.chartOpen = false;
    this.selectedRoom = room;
  }
}
