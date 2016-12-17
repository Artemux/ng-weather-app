import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temprature',
  templateUrl: './temprature.component.html',
  styleUrls: ['./temprature.component.css']
})
export class TempratureComponent implements OnInit {

  @Input()
  public Data: {};

  constructor() {

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
