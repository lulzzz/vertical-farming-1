/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Temperature }           from '../../model/temperature.model';
import {BaseService} from "../base/base.service";

@Injectable()
export class TemperatureSearchService extends BaseService {

  constructor(private http: Http) {
    super();
  }

  private temperatureUrl = "/temperature"
  search(term: string): Observable<Temperature[]> {
    const url = `${this.temperatureUrl}/?name=${term}`;
    return this.http
      .get(url)
      .map(response => response.json().data as Temperature[]);
  }
}
