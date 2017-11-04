import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StocksService } from './stocks.service';

import { AppComponent } from './app.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
