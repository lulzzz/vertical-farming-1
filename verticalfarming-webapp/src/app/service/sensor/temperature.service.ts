/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {SensorService} from "../base/sensor.service";
import {ServiceUtil} from "../base/util.service";
import {Injectable} from "@angular/core";
import {Constants} from "../../config/constants/constants";
import {ISensor} from "../../model/sensor/sensor.interface";

@Injectable()
export class TemperatureService implements SensorService {

  private temperatureUrl = "/temperature";

  constructor(private http: Http) {}

  getAll(): Promise<ISensor[]> {
    const url = `${Constants.SERVER_URL}${this.temperatureUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ISensor[])
      .catch(ServiceUtil.handleError);
  }

  getById(id: number): Promise<ISensor[]> {
    const url = `${Constants.SERVER_URL}${this.temperatureUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ISensor[])
      .catch(ServiceUtil.handleError);
  }

}
