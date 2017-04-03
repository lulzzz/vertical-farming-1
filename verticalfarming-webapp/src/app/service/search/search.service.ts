/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Sensor } from "../../model/sensor/sensor.model";
import {Constants} from "../../config/constants/constants";

@Injectable()
export class SearchService  {

  private searchUrl = "/search";

  constructor(private http: Http) {}

  search(terms: Observable<string>, debounceTime: number = 400) {
    return terms
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.rawsearch(term));
  }

  rawsearch(term) {
    const url = `${Constants.VF_URL}/${this.searchUrl}/?query=${term}`;
    return this.http
      .get(url)
      .map(response => response.json().data as Sensor[]);
  }
}
