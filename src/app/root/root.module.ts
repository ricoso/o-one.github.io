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
export class RootModule {

  constructor(protected httpClient: HttpClient) {
    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set("Content-Type", "application/json");
    myHeaders = myHeaders.set("Access-Control-Request-Headers", "*");
    myHeaders = myHeaders.set("api-key", "LObran0uAebv3B5jMKAyhbBoSvodHXEBhLJVh2QZNvzC6dQzeRLzoADF9a8XGJRU");
    myHeaders = myHeaders.set("Accept", "application/json");

    let raw = JSON.stringify({
      "dataSource": "ClusterRicoTest",
      "database": "Test",
      "collection": "a"
    });

    let requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    debugger;

    this.httpClient.request<any>('post', `https://eu-central-1.aws.data.mongodb-api.com/app/data-zmwrw/endpoint/data/v1/action/find`,
      {
        body: raw,
        headers: myHeaders
      }
    ).subscribe(
      result => console.log(result),
      error => console.log('error', error));
  }

}
