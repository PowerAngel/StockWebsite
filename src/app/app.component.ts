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

  DagligvarorTotalCost = this.dataService.DagligvarorTotalCost;
  IndustrivarorTotalCost = this.dataService.IndustrivarorTotalCost;
  InformationsteknikTotalCost = this.dataService.InformationsteknikTotalCost;
  MaterialTotalCost = this.dataService.MaterialTotalCost;
  SallankopTotalCost = this.dataService.SallankopTotalCost;
  FinansFastighetTotalCost = this.dataService.FinansFastighetTotalCost;
  TelekomTotalCost = this.dataService.TelekomTotalCost;
  EnergiTotalCost = 0;
  HalsaTotalCost = 0;
  OvrigtTotalCost = this.dataService.OvrigtToalCost;

  DagligvarorTotalValue = this.dataService.DagligvarorTotalValue;
  IndustrivarorTotalValue = this.dataService.IndustrivarorTotalValue;
  InformationsteknikTotalValue = this.dataService.IndustrivarorTotalValue;
  MaterialTotalValue = this.dataService.MaterialTotalValue;
  SallankopTotalValue = this.dataService.SallankopTotalValue;
  FinansFastighetTotalValue = this.dataService.FinansFastighetTotalValue;
  TelekomTotalValue = this.dataService.TelekomTotalValue;
  EnergiTotalValue = 0;
  HalsaTotalValue = 0;
  OvrigtTotalValue = this.dataService.OvrigtTotalValue;

  TotalCost = this.dataService.TotalCost;
  TotalValue = this.dataService.TotalValue;

  DagligvarorPortion = this.DagligvarorTotalValue / this.TotalValue;
  IndustrivarorPortion = this.IndustrivarorTotalValue / this.TotalValue;
  InformationsteknikPortion = this.InformationsteknikTotalValue / this.TotalValue;
  MaterialPortion = this.MaterialTotalValue / this.TotalValue;
  SallankopPortion = this.SallankopTotalValue / this.TotalValue;
  FinansFastighetPortion = this.FinansFastighetTotalValue / this.TotalValue;
  TelekomPortion = this.TelekomTotalValue / this.TotalValue;
  EnergiPortion = 0;
  HalsaPortion = 0;
  OvrigtPortion = this.OvrigtTotalValue / this.TotalValue;

  stocks = this.dataService.stocks;

  ngOnInit() {
    this.stockToBuy = this.dataService.stockToBuy();
  }

  calcValue(cost :number, amount: number)
  {
    
  }
}
