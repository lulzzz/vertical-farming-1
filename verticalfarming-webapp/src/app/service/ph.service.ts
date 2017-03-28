/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Headers, Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {Ph} from "../model/ph.model";
import {SensorService} from "./base/sensor.service";
import {ServiceUtil} from "./util.service";

@Injectable()
export class PhService implements SensorService{

  private phUrl ="/ph";

  constructor(private http: Http) {}

  getAll(): Promise<Ph[]> {
    return this.http.get(ServiceUtil.baseUrl + this.phUrl)
      .toPromise()
      .then(response => response.json().data as Ph[])
      .catch(ServiceUtil.handleError);
  }

  getById(id: number): Promise<Ph[]> {
    let url = `${ServiceUtil.baseUrl}/${this.phUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Ph[])
      .catch(ServiceUtil.handleError);
  }
}
