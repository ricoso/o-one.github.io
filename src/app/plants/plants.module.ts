import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsComponent } from './plants.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { PlantPhaseDetailsComponent } from './plant-phase-details/plant-phase-details.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PlantsComponent,
    PlantPhaseDetailsComponent
  ],
  imports: [
    CommonModule,
    PlantsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class PlantsModule { }
