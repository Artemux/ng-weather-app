import { Component, Output, EventEmitter, ElementRef,  OnInit } from '@angular/core';
import {Event} from "@angular/router";
import {InfoserviceService} from "../infoservice.service";

@Component({
  selector: 'app-info-desk',
  templateUrl: './info-desk.component.html',
  styleUrls: ['./info-desk.component.css'],
})
export class InfoDeskComponent implements OnInit {
  public menu: Array<{}> = [
    {
      name: 'USA',
      href: '#USA'
    },
    {
      name: 'France',
      href: '#France'
    },
    {
      name: 'England',
      href: '#England'
    },
    {
      name: 'Indonesia',
      href: '#Indonesia'
    }
  ];

  public InfoData: Array<{}>;
  public country: string = "USA";

  public chose(InfoData:{header:string, address1:string, address2:string, tel:string, photos:[string], weather:[string],stats:{}}, myImage) {
    this.infoService.sendData(InfoData);
    myImage.src = InfoData.photos[0];
  }


  constructor(public infoService:InfoserviceService) {
    this.InfoData = this.infoService.getData();
  }

  selectCountry(event) {
    event.preventDefault();
     let target = event.target;
     this.country = target.innerHTML;
  }

  ngOnInit() {
    this.infoService.sendData(this.InfoData[0]);
  }

}
