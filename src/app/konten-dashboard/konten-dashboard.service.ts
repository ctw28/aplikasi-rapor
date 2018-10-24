import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()

export class KontenDashboardService {
  dashboardUrl = 'http://localhost/web_balai/data/rest_menu';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient){}

  getDashboard (): Observable<string[]> {
    return this.http.get<>(this.dashboardUrl);
  }

}
