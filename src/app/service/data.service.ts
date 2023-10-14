import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  export class DataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {}

  getData(filename: string) {
    return this.httpClient.get(`assets/${filename}.json`);
  }

  saveData(filename: string, data: any) {
    return this.httpClient.put(`assets/${filename}.json`, data, this.httpOptions);
  }
}
