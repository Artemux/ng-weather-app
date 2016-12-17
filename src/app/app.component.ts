import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public weatherData: {};
    public statData: {};

    public constructor() {

    }

    public initWInfo(data:{}) {
      this.weatherData = data;
    }

    public initStat(data:{}) {
      this.statData = data;
    }

    ngOnInit() {

    }
}
