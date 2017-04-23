/**
 * Created by alexanderlerma on 4/22/17.
 */
import {Component, Input} from '@angular/core';
import {Sensor} from "../../model/sensor/sensor.model";
import {VfUtil} from "../../util/vf.util";

@Component({
  selector: 'vf-chart',
  templateUrl: './vf-chart.component.html'
})
export class VFChart {
  _sensors: Sensor[];
  labels: string;
  options: Object;


  @Input()
  set sensors(sensors: Sensor[]) {
    console.log(JSON.stringify(sensors));
    this._sensors = sensors;
    const groupedByName = VfUtil.groupBy(sensors, 'name');
    let series = [];
    Object.keys(groupedByName).forEach(key => {
      const withTimes = groupedByName[key]
        .map(sensor => [sensor.createdAt, sensor.data]);
      series.push({name: key, data: withTimes});
    });
    this.options  = {
      chart: {
        type: 'line'
      },
      title: {
        text: sensors[0].type + ' chart'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: {
        title: {
          text: 'Temperature'
        }
      },
      series: series
    }
  }
}

