import { Component } from '@angular/core';
import {DataService} from '../service/data.service';
import {PlantDate} from '../iface/data.iface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent {

  plantCyclePhases = new Array<number>();
  data: PlantDate = {duration: 0, phases: {}}

  constructor(protected dataservice: DataService, protected router: Router) {

  }

  onAddPhase = () => {
    const i = this.plantCyclePhases.length + 1;
    this.data.phases[i] = {} as any;
    this.plantCyclePhases.push(i);
    this.dataservice.saveData(JSON.stringify(this.data));
  }

  onDeletePhase = () => {
    const i = this.plantCyclePhases.length;
    const { [i]: data , ...rest} = this.data.phases;
    this.data.phases = rest;
    this.plantCyclePhases.pop();
    this.dataservice.saveData(JSON.stringify(this.data));
  }

  navigateTo = (id: number) => {
    this.router.navigate([`/details/${id}`]);
  }

}
