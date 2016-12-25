import { Component, OnInit } from '@angular/core';
import { InfoserviceService } from './infoservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public infoData: {};

    public constructor(private infoService: InfoserviceService) {

    }

    ngOnInit() {
        this.infoService.pushData.subscribe(
            data => {
                this.infoData = data;
            }
        )
    }
}
