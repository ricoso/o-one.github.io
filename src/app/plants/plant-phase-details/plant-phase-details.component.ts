import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../service/data.service';

@Component({
  selector: 'app-plant-phase-details',
  templateUrl: './plant-phase-details.component.html',
  styleUrls: ['./plant-phase-details.component.scss']
})
export class PlantPhaseDetailsComponent implements OnInit {
  id = 0;
  form = this.formbuilder.group({
    groundhumidity: ['', Validators.required],
    temperature: ['', [Validators.required]],
    airhumidity: ['', [Validators.required]],
    lux: ['', [Validators.required]],
    co2: ['', [Validators.required]],
    ph: ['', [Validators.required]],
    nitrogen: ['', [Validators.required]],
    phosphor: ['', [Validators.required]],
    potassium: ['', [Validators.required]],
    chlorophyll: ['', [Validators.required]],
    height: ['', [Validators.required]],
    leafs: ['', [Validators.required]]

  });

  constructor(protected route: ActivatedRoute,
              protected formbuilder: FormBuilder,
              protected dateservice: DataService) {

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  onSave = () => {
    if (this.form.valid) {
      let data = this.dateservice.getData();
      data.phases[this.id].parameters = this.form.value;
      this.dateservice.saveData(JSON.stringify(data));
    }
  }

}
