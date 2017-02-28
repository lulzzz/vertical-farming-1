/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Headers, Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Temperature } from '../model/temperature.model'
import {BaseService} from "./base/base.service";

@Injectable()
export class TemperatureService extends BaseService {

  private temperatureUrl = "/temperature"

  constructor(private http: Http) {
    super();
  }

  getTemperatures(): Promise<Temperature[]> {
    return this.http.get(this.temperatureUrl)
      .toPromise()
      .then(response => response.json().data as Temperature[])
      .catch(this.handleError);
  }

  getTemperaturesById(id: number): Promise<Temperature[]> {
    const url = `${this.temperatureUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Temperature[])
      .catch(this.handleError);
  }

}
