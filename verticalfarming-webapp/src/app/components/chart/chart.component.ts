/**
 * Created by alexanderlerma on 3/27/17.
 */
import {Component, OnInit} from '@angular/core';
import {TemperatureService} from "../../service/sensor/temperature.service";
// import {SensorService} from "../../service/base/sensor.service";

@Component({
  selector: 'vf-chart',
  templateUrl: './chart.component.html',
  providers: [TemperatureService]
})
export class VFChartComponent implements OnInit {

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

  constructor(private service: TemperatureService) {}

  ngOnInit(): void {
    this.service.getAll().then(sensors => {
      this.lineChartData = [
        {data: sensors.map(x => x.data), label: sensors[0].type}
      ];
      this.lineChartLabels = sensors.map(x => x.createdAt);
    });
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public reload(): void {
    this.ngOnInit();
  }
}
