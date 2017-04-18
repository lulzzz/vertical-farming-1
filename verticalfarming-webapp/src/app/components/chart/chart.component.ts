/**
 * Created by alexanderlerma on 3/27/17.
 */
import 'chart.js/src/chart';
declare const Chart;
import {Component, Input} from '@angular/core';
import {TemperatureService} from "../../service/sensor/temperature.service";
import {Room} from "../../model/room/room.model";

@Component({
  selector: 'vf-chart',
  templateUrl: './chart.component.html',
  providers: [TemperatureService]
})
export class VFChartComponent {
  public _room: Room;
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any>;
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
  ];

  @Input()
  set room(room : Room){
    this._room = room;
    this.lineChartData = this._room.racks
      .map(rack => {
        const formatted: any[] = [];
        for (const key of Object.keys(rack.sensors)) {
          formatted.push({data: rack.sensors[key].map(sensor => sensor.data), label: key});
        }
        console.log(JSON.stringify(formatted));
        return formatted;
      });
    this.lineChartLabels = this._room.racks
      .map(rack => {
        const formatted: string[] = [];
        for (const key of Object.keys(rack.sensors)) {
          formatted.push(rack.sensors[key].map(sensor => sensor.createdAt));
        }
        return formatted;
      })
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
