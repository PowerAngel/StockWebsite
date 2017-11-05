import { Component } from '@angular/core';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: StocksService)
  {

  }

  title = 'app';
  stockToBuy = "";

  Actic = this.dataService.Actic;
  Alibaba = this.dataService.Alibaba;
  Amazon = this.dataService.Amazon;  
  AtlasCopco = this.dataService.AtlasCopco;
  Avanza = this.dataService.Avanza;
  Bahnhof = this.dataService.Bahnhof;  
  BillerudKorsnas = this.dataService.BillerudKorsnas;
  ClasOhlson = this.dataService.ClasOhlson;  
  Cloetta = this.dataService.Cloetta;
  Handelsbanken = this.dataService.Handelsbanken;
  Hovding = this.dataService.Hovding;
  ICA = this.dataService.ICA;  
  Kopparbergs = this.dataService.Kopparbergs;
  Mycronic = this.dataService.Mycronic;
  NVIDIA = this.dataService.NVIDIA;
  Peab = this.dataService.Peab;  
  Starbreeze = this.dataService.Starbreeze;
  Tesla = this.dataService.Tesla;
  Tobii = this.dataService.Tobii;

  stocks = this.dataService.stocks;

  ngOnInit() {
    this.stockToBuy = this.dataService.stockToBuy();
  }

  calcValue(cost :number, amount: number)
  {
    
  }
}
