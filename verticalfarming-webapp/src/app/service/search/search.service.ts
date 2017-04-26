/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Constants } from "../../config/constants/constants";
import {Observable} from "rxjs";
import {ISensor} from "../../model/sensor/sensor.interface";
import {ModelUtil} from "../../model/util/model.util";

@Injectable()
export class SearchService  {

  private searchUrl = "/search";

  constructor(private http: Http) {}

  search(query: string) : Observable<any> {
    if(query === '') {
      return Observable.of([]);
    }

    const url = `${Constants.SERVER_URL}${this.searchUrl}?query=${query}`;
    return this.http
      .get(url)
      .map(response => response.json() as ISensor[])
      .map(ModelUtil.sensorsToRooms);
  }
}
