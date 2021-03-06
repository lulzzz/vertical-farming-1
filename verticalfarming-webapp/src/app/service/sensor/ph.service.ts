/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {SensorService} from "../base/sensor.service";
import {ServiceUtil} from "../base/util.service";
import {Constants} from "../../config/constants/constants";
import {ISensor} from "../../model/sensor/sensor.interface";

@Injectable()
export class PhService implements SensorService {

  private phUrl ="/ph";


  constructor(private http: Http) {}

  getAll(): Promise<ISensor[]> {
    const url = `${Constants.SERVER_URL}${this.phUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ISensor[])
      .catch(ServiceUtil.handleError);
  }

  getById(id: number): Promise<ISensor[]> {
    const url = `${Constants.SERVER_URL}${this.phUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as ISensor[])
      .catch(ServiceUtil.handleError);
  }
}
