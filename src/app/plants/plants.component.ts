import {Component} from '@angular/core';
import {DataService} from '../service/data.service';
import {PlantDate} from '../iface/data.iface';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent {

  plantCyclePhases = new Array<number>();
  data: PlantDate = {description: '', maxPhase: 0, phases: {}};

  form = new FormGroup<any>({
    description: new FormControl('', Validators.required),
    maxPhase: new FormControl('', Validators.required)
  });

  constructor(protected dataservice: DataService,
              protected router: Router) {
  }

  onAddPhase = () => {
    const i = this.plantCyclePhases.length + 1;
    if (i < 11) {
      this.data.phases[i] = {duration: {startDay: 0, endDay: 0}} as any;
      this.plantCyclePhases.push(i);
      this.dataservice.saveData(JSON.stringify(this.data));
    }
  }

  onDeletePhase = () => {
    const i = this.plantCyclePhases.length;
    const {[i]: data, ...rest} = this.data.phases;
    this.data.phases = rest;
    this.plantCyclePhases.pop();
    this.dataservice.saveData(JSON.stringify(this.data));
  }

  onSave = () => {
    if (this.form.valid) {
      let data: PlantDate = this.dataservice.getData();
      data = this.form.value as any;
      this.dataservice.saveData(JSON.stringify(data));
    }
  }

  onChangeStartDay = (value: any, id: any) => {
    this.data.phases[id].duration.startDay = value.currentTarget.value;
    this.dataservice.saveData(JSON.stringify(this.data));
  }

  onChangeEndDay = (value: any, id: any) => {
    this.data.phases[id].duration.endDay = value.currentTarget.value;
    this.dataservice.saveData(JSON.stringify(this.data));
  }
}
