import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JabatanPegawaiServiceService {

  constructor(private http: HttpClient) { }

  postData(v) {
    return this.http.post('http://192.168.1.240:8080/api/master/pegawai/', v);
  }

}
