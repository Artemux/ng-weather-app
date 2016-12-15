import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="copy-right">
      <p>
        &copy 2015 Hot Weather Widget. All rights reserved | Design by
         <a href="http://w3layouts.com/" target="_blanck"> W3layouts</a>
      </p>
    </div>
  `,
  styles: [`
        .copy-right {
            text-align: center;
            padding: 0em 0em 2em 0em;
        }

        .copy-right p {
            font-size: 1em;
            color: #fff;
            line-height: 1.6em;
        }
        
        .copy-right p a {
            color: #fd7b87;
        }
    `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
