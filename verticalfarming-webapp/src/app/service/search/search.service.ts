/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Constants } from "../../config/constants/constants";
import { ISensor } from "../../model/sensor/sensor.interface";

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

  rawsearch(query) : any {
    if(query == '')
      return Observable.empty();
    const url = `${Constants.SERVER_URL}${this.searchUrl}?query=${query}`;
    return this.http
      .get(url)
      .map(response => response.json() as ISensor[])
  }
}
