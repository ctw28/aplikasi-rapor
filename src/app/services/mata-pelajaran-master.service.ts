import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MataPelajaranMasterService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://192.168.1.240:8080/api/master/matapelajaran/?page=0&size=5');
  }

  postData(v) {
    return this.http.post('http://192.168.1.240:8080/api/master/matapelajaran/', v);
  }

}
