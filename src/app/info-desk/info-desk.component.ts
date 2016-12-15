import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-desk',
  templateUrl: './info-desk.component.html',
  styleUrls: ['./info-desk.component.css']
})
export class InfoDeskComponent implements OnInit {
  public menu: Array<{}> = [
    {
      name: 'Hotel',
      href: '#hotel'
    },
    {
      name: 'Fishing',
      href: '#fishing'
    },
    {
      name: 'Tours',
      href: '#tours'
    },
    {
      name: 'Weather',
      href: '#weather'
    }
  ];

  public contacts: Array<string> = [
      'Resort Address',
      'Sed perspiciatis',
      'Et harum quidem',
      '1285 968 685'
  ];

  public photos: Array<string> = [
       '../../assets/images/res.jpg',
       '../../assets/images/r1.jpg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
