import { Component } from '@angular/core';
import {DataService} from '../service/data.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent {

  plantCyclePhases = new Array<number>();

  constructor(protected dataservice: DataService) {
    this.dataservice.saveData('data_1', JSON.parse(JSON.stringify({}))).subscribe();
  }

  onAddPhase = () => {
    this.plantCyclePhases.push(this.plantCyclePhases.length + 1);
  }

  onDeletePhase = () => {
    this.plantCyclePhases.pop();
  }

}
