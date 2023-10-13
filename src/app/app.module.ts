import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootModule } from './root/root.module';
import {DataService} from './service/data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  private URL = 'assets/data.json';

  constructor(private dataService: DataService) {
    this.dataService.getData('data').subscribe(data => {
      console.log(':::', data);
    });
  }





  /*constructor(protected httpClient: HttpClient) {
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
  }*/
}
