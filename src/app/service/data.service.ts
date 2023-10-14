import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PlantDate} from '../iface/data.iface';

@Injectable({
  providedIn: 'root'
})
  export class DataService {

  plantKey = 'plant'


  getData(): PlantDate {
    return JSON.parse(localStorage.getItem(this.plantKey) as any) as PlantDate;
  }

  saveData(data: string) {
    return localStorage.setItem(this.plantKey, data);
  }
}
