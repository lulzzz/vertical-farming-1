/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {SensorService} from "../base/sensor.service";
import {ServiceUtil} from "../base/util.service";
import {Sensor} from "../../model/sensor/sensor.model";
import {Injectable} from "@angular/core";

@Injectable()
export class TemperatureService implements SensorService {

  private temperatureUrl = "/temperature";

  constructor(private http: Http) {}

  getAll(): Promise<Sensor[]> {
    return this.http.get(ServiceUtil.baseUrl + this.temperatureUrl)
      .toPromise()
      .then(response => response.json().data as Sensor[])
      .catch(ServiceUtil.handleError);
  }

  getById(id: number): Promise<Sensor[]> {
    const url = `${ServiceUtil.baseUrl}/${this.temperatureUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Sensor[])
      .catch(ServiceUtil.handleError);
  }

}
