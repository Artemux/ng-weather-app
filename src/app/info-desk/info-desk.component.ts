import { Component, Output, EventEmitter, ElementRef,  OnInit } from '@angular/core';
import {Event} from "@angular/router";

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

  public InfoData: Array<{}>;


  @Output()
  public initWeatherDetails: EventEmitter<{}> = new EventEmitter<{}>();

  @Output()
  public choseCurrentLoc: EventEmitter<{}> = new EventEmitter<{}>();

  @Output()
  public initSocialInfo: EventEmitter<{}> = new EventEmitter<{}>();

  @Output()
  public choseCurrentStat: EventEmitter<{}> = new EventEmitter<{}>()

  public chose(InfoData:{header:string, address1:string, address2:string, tel:string, photos:[string], weather:[string],stats:{}}, myImage) {
    this.choseCurrentLoc.emit(InfoData);
    this.choseCurrentStat.emit(InfoData);
    myImage.src = InfoData.photos[2];
    console.log(myImage);
  }


  constructor() {
    this.InfoData = [
      {
        header: 'Resort Address',
        address1: 'Elk Street',
        address2: 'Hanging Gardens',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/res.jpg',
          '../../assets/images/r1.jpg',
          '../../assets/images/Miami.jpg'
        ],
        weather: {
          air: '14',
          water: '20'
        },
        stats: {
          followers: 2850,
          following: 675
        }
      },
      {
        header: 'Resort Address',
        address1: 'Ocean Drive',
        address2: 'Hyad Park',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/res.jpg',
          '../../assets/images/r1.jpg',
          '../../assets/images/Malang.jpg'
        ],
        weather: {
          air: '21',
          water: '25'
        },
        stats: {
          followers: 1650,
          following: 775
        }
      },
      {
        header: 'Resort Address',
        address1: 'Kensington Station',
        address2: 'Baker Street',
        tel: '1285 968 685',
        photos: [
          '../../assets/images/res.jpg',
          '../../assets/images/r1.jpg',
          '../../assets/images/san_francisco.jpg'
        ],
        weather: {
          air: '30',
          water: '25'
        },
        stats: {
          followers: 5850,
          following: 2675
        }
      }
    ];
  }

  ngOnInit() {
    this.initWeatherDetails.emit(this.InfoData[0]);
    this.initSocialInfo.emit(this.InfoData[0]);
  }

}
