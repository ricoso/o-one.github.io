import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantsComponent } from './plants.component';
import {PlantPhaseDetailsComponent} from './plant-phase-details/plant-phase-details.component';

const routes: Routes = [
  { path: '',
    component: PlantsComponent,
    title: 'Plants Setup'
  },
  {
    path: 'detail/:id',
    component: PlantPhaseDetailsComponent,
    title: 'Plants Setup Details'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantsRoutingModule { }
