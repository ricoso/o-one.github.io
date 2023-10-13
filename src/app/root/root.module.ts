import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './root.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';


@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    CommonModule,
    RootRoutingModule,
    MatButtonModule,
    HttpClientModule
  ]
})
export class RootModule {}
