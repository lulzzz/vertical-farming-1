/**
 * Created by alexanderlerma on 2/27/17.
 */
import { Headers, Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import {BaseService} from "./base/base.service";
import {Ph} from "../model/ph.model";

@Injectable()
export class PhService extends BaseService {

  private phUrl ="/ph"

  constructor(private http: Http) {
    super();
  }

  getPhs(): Promise<Ph[]> {
    return this.http.get(this.phUrl)
      .toPromise()
      .then(response => response.json().data as Ph[])
      .catch(this.handleError);
  }

  getPhsById(id: number): Promise<Ph[]> {
    const url = `${this.phUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Ph[])
      .catch(this.handleError);
  }
}
