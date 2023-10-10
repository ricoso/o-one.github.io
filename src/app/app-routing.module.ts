import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'plants', loadChildren: () => import('./plants/plants.module').then(m => m.PlantsModule) },
  { path: '', loadChildren: () => import('./root/root.module').then(m => m.RootModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
