import {Component, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {PlantDate} from '../iface/data.iface';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.scss']
})
export class PlantsComponent implements OnInit {

  plantCyclePhases = new Array<{startDay: number, endDay:number}>();
  data: PlantDate = {description: {description: '', maxPhase: 0}, phases: {}};

  form = new FormGroup<any>({
    description: new FormControl('', Validators.required),
    maxPhase: new FormControl('', Validators.required)
  });

  constructor(protected dataservice: DataService,
              protected router: Router) {}

  ngOnInit(): void {
    let data = this.dataservice.getData();
    if (data && data.description) {
      this.data = data;
      this.form.patchValue(this.data.description);
      if (this.data!.phases) {
        let phases = Object.keys(this.data.phases);
        phases.forEach((key) => {
          let duration = this.data.phases[key].duration
          this.plantCyclePhases.push(duration);
        })
      } else {
        this.data.phases = {};
        this.dataservice.saveData(JSON.stringify(this.data));
      }
    }
  }

  onAddPhase = () => {
    const i = this.plantCyclePhases.length + 1;
    if (i < 11) {
      this.data.phases[i] = {duration: {startDay: 0, endDay: 0}} as any;
      this.plantCyclePhases.push({startDay: 0, endDay: 0});
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
      this.data.description = this.form.value;
      this.dataservice.saveData(JSON.stringify(this.data));
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
