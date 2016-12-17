import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-teddy-bear',
  templateUrl: './teddy-bear.component.html',
  styleUrls: ['./teddy-bear.component.css']
})
export class TeddyBearComponent implements OnInit {

  // public head:string = 'Nam libero voluptatem';
  // public photo:string = '../../assets/images/b1.jpg';
  // public stats:{followers: number, following:number} = {
  //     followers: 2850,
  //     following: 675
  // };

  @Input()
  public Data:{};

  constructor() { }

  ngOnInit() {
  }

}
