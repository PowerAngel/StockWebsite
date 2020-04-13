import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StocksService } from './stocks.service';

import { AppComponent } from './app.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { ChartModule } from 'angular-highcharts';

import { DataTableModule } from 'angular-4-data-table/src/index';

import { RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    DataTableModule,
    RouterModule.forRoot([
      {path: 'Table', component: TableComponent},
      {path: 'Chart', component: ChartComponentComponent},
      {path: '', component: TableComponent}
    ])
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
