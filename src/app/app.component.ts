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

  stocks = this.dataService.stocks;  

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
  InformationsteknikTotalValue = this.dataService.InformationsteknikTotalValue;
  MaterialTotalValue = this.dataService.MaterialTotalValue;
  SallankopTotalValue = this.dataService.SallankopTotalValue;
  FinansFastighetTotalValue = this.dataService.FinansFastighetTotalValue;
  TelekomTotalValue = this.dataService.TelekomTotalValue;
  EnergiTotalValue = 0;
  HalsaTotalValue = 0;
  OvrigtTotalValue = this.dataService.OvrigtTotalValue;


  TotalCost = 0;
  TotalValue = 0;

  TotalDividend = 0;
  TotalDividendValue = 0;
  TotalDividendCost = 0;

  DagligvarorPortion;
  IndustrivarorPortion;
  InformationsteknikPortion;
  MaterialPortion;
  SallankopPortion;
  FinansFastighetPortion;
  TelekomPortion;
  EnergiPortion;
  HalsaPortion ;
  OvrigtPortion;

  DagligvarorYield;
  IndustrivarorYield;
  InformationsteknikYield;
  MaterialYield;
  SallankopYield;
  FinansFastighetYield;
  TelekomYield;
  EnergiYield;
  HalsaYield;
  OvrigtYield;
  
  ngOnInit() {
    this.stockToBuy = this.dataService.stockToBuy();

    
    this.stocks.forEach(element => {
      this.TotalDividend += element.dividend * element.amount;
      this.TotalCost += element.boughtFor * element.amount;
      this.TotalValue += element.currentPrice * element.amount;      
    });    

    this.TotalDividendCost = this.TotalDividend / this.TotalCost;
    this.TotalDividendValue = this.TotalDividend / this.TotalValue;

    this.DagligvarorPortion = this.DagligvarorTotalValue / this.TotalValue;
    this.IndustrivarorPortion = this.IndustrivarorTotalValue / this.TotalValue;
    this.InformationsteknikPortion = this.InformationsteknikTotalValue / this.TotalValue;
    this.MaterialPortion = this.MaterialTotalValue / this.TotalValue;
    this.SallankopPortion = this.SallankopTotalValue / this.TotalValue;
    this.FinansFastighetPortion = this.FinansFastighetTotalValue / this.TotalValue;
    this.TelekomPortion = this.TelekomTotalValue / this.TotalValue;
    this.EnergiPortion = 0;
    this.HalsaPortion = 0;
    this.OvrigtPortion = this.OvrigtTotalValue / this.TotalValue;
  
    this.DagligvarorYield = this.DagligvarorTotalValue / this.DagligvarorTotalCost;
    this.IndustrivarorYield = this.IndustrivarorTotalValue / this.IndustrivarorTotalCost;
    this.InformationsteknikYield = this.InformationsteknikTotalValue / this.InformationsteknikTotalCost;
    this.MaterialYield = this.MaterialTotalValue / this.MaterialTotalCost;
    this.SallankopYield = this.SallankopTotalValue / this.SallankopTotalCost;
    this.FinansFastighetYield = this.FinansFastighetTotalValue / this.FinansFastighetTotalCost;
    this.TelekomYield = this.TelekomTotalValue / this.TelekomTotalCost;
    this.EnergiYield = 0;
    this.HalsaYield = 0;
    this.OvrigtYield = this.OvrigtTotalValue / this.OvrigtTotalCost;
  }
}
