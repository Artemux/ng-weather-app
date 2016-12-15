import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>
      Hot Weather Widget
    </h1>
  `,
  styles: [`
      h1 {
        text-align: center;
        font-size: 2em;
        font-family: Quicksand, sans-serif;
        color: white;
        margin: 3em 0em 2em 0em;
      }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
