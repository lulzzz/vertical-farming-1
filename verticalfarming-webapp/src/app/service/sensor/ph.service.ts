/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {SensorService} from "../base/sensor.service";
import {ServiceUtil} from "../base/util.service";
import {Sensor} from "../../model/sensor/sensor.model";

@Injectable()
export class PhService implements SensorService {

  private phUrl ="/ph";

  constructor(private http: Http) {}

  getAll(): Promise<Sensor[]> {
    return this.http.get(ServiceUtil.baseUrl + this.phUrl)
      .toPromise()
      .then(response => response.json().data as Sensor[])
      .catch(ServiceUtil.handleError);
  }

  getById(id: number): Promise<Sensor[]> {
    let url = `${ServiceUtil.baseUrl}/${this.phUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Sensor[])
      .catch(ServiceUtil.handleError);
  }
}
