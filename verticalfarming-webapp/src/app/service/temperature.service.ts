/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Temperature } from '../model/temperature.model'
import {SensorService} from "./base/sensor.service";
import {ServiceUtil} from "./util.service";

export class TemperatureService implements SensorService {

  private temperatureUrl = "/temperature";

  constructor(private http: Http) {}

  getAll(): Promise<Temperature[]> {
    return this.http.get(ServiceUtil.baseUrl + this.temperatureUrl)
      .toPromise()
      .then(response => response.json().data as Temperature[])
      .catch(ServiceUtil.handleError);
  }

  getById(id: number): Promise<Temperature[]> {
    const url = `${ServiceUtil.baseUrl}/${this.temperatureUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Temperature[])
      .catch(ServiceUtil.handleError);
  }

}
