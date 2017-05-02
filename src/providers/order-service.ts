import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../models/user';


/*
  Generated class for the OrderService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OrderService {
  orderSaved = "api.data";

  constructor(public http: Http) {
    console.log('Hello OrderService Provider');

  }
load(): Observable<User[]> {
    return this.http.get(`${this.orderSaved}`)
      .map(res => <User[]>res.json());
  }
}
