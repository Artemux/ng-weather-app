import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {

  public head:string;
  public data: {air:string, water:string};

  constructor() {
    this.head = 'Et harum quidem';
    this.data = {
      air: '14',
      water: '20'
    };
  }

  public setClasses() {
    let classes = {
      cloud: true,
      sun: false,
      wind: false
    };
    return classes;
  }

  ngOnInit() {
  }

}
