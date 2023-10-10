import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  public breakpoint: number | undefined;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
    this.router.events.subscribe((event) => {
      console.log(event);
    });
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
