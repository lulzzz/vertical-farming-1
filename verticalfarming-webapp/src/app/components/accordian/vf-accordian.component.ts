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
  selectedSensor: string;
  selectedRack: string;
  selectedRoom: string;
  chartOpen = false;

  onSelectedSensorName(name: string) {
    this.chartOpen = !this.chartOpen;
    this.selectedSensor = name;
    console.log('sensor set to ', name);
  }

  onSelectedRack(rack: string) {
    this.chartOpen = false;
    this.selectedRack = rack;
    console.log('rack set to ', rack);
  }

  onSelectedRoom(room: string) {
    this.chartOpen = false;
    this.selectedRoom = room;
    console.log('room set to ', room);

  }
}
