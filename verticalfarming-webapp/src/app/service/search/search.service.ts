/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Constants} from "../../config/constants/constants";
import {ISensor} from "../../model/sensor/sensor.interface";

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

  rawsearch(query) {
    const url = `${Constants.VF_URL}${this.searchUrl}?query=${query}`;
    console.log(url);
    return this.http
      .get(url)
      .map(response => response.json() as ISensor[]);
  }
}
