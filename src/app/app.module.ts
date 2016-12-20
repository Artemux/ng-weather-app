import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InfoDeskComponent } from './info-desk/info-desk.component';
import { TempratureComponent } from './temprature/temprature.component';
import { TeddyBearComponent } from './teddy-bear/teddy-bear.component';
import { FooterComponent } from './footer/footer.component';
import { CountryFilterPipe } from './country-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoDeskComponent,
    TempratureComponent,
    TeddyBearComponent,
    FooterComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
