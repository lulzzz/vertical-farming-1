/**
 * Created by alexanderlerma on 4/22/17.
 */
import {Component, Input} from '@angular/core';
import {Sensor} from "../../model/sensor/sensor.model";
import {VFUtils} from "../../util/vf.util";

@Component({
  selector: 'vf-chart',
  templateUrl: './vf-chart.component.html'
})
export class VFChart {
  _sensors: Sensor[];
  options: Object;


  @Input()
  set sensors(sensors: Sensor[]) {
    if (!sensors || sensors.length == 0)
      return;

    this._sensors = sensors;
    const groupedByName = VFUtils.groupBy(sensors, 'name');
    let series = [];
    Object.keys(groupedByName)
      .forEach(key => {
        const withTimes = groupedByName[key]
          .map(sensor => [new Date(sensor.createdAt).getTime(), sensor.data])
          .sort((a, b) => a[0] - b[0]);
        series.push({name: key, data: withTimes});
    });
    const type : string = VFUtils.capitalizer(sensors[0].type);

    this.options  = {
      chart: {
        type: 'line'
      },
      title: {
        text: type + ' Chart'
      },
      xAxis: {
        title: {
          text: 'Time'
        },
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: type
        }
      },
      series: series
    }
  }


}


