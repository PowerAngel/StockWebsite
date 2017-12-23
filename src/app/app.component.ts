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

  DagligvarorTotalCost = (this.Actic.boughtFor * this.Actic.amount) + (this.ClasOhlson.boughtFor * this.ClasOhlson.amount) + (this.ICA.boughtFor * this.ICA.amount) + (this.Kopparbergs.boughtFor * this.Kopparbergs.amount);
  IndustrivarorTotalCost = (this.AtlasCopco.boughtFor * this.AtlasCopco.amount) + (this.Mycronic.boughtFor * this.Mycronic.amount) + (this.Peab.boughtFor * this.Peab.amount);
  InformationsteknikTotalCost = (this.Starbreeze.boughtFor * this.Starbreeze.amount) + (this.Tobii.boughtFor * this.Tobii.amount);
  MaterialTotalCost = (this.BillerudKorsnas.boughtFor * this.BillerudKorsnas.amount);
  SallankopTotalCost = (this.Cloetta.boughtFor * this.Cloetta.amount) + (this.Hovding.boughtFor * this.Hovding.amount);
  FinansFastighetTotalCost = (this.Avanza.boughtFor * this.Avanza.amount) + (this.Handelsbanken.boughtFor * this.Handelsbanken.amount);
  TelekomTotalCost = (this.Bahnhof.boughtFor * this.Bahnhof.amount);
  EnergiTotalCost = 0;
  HalsaTotalCost = 0;
  OvrigtToalCost = (this.Alibaba.boughtFor * this.Alibaba.amount) + (this.Amazon.boughtFor * this.Amazon.amount) + (this.NVIDIA.boughtFor * this.NVIDIA.amount) + (this.Tesla.boughtFor * this.Tesla.amount);

  DagligvarorTotalValue = (this.Actic.currentPrice * this.Actic.amount) + (this.ClasOhlson.currentPrice * this.ClasOhlson.amount) + (this.ICA.currentPrice * this.ICA.amount) + (this.Kopparbergs.currentPrice * this.Kopparbergs.amount);
  IndustrivarorTotalValue = (this.AtlasCopco.currentPrice * this.AtlasCopco.amount) + (this.Mycronic.currentPrice * this.Mycronic.amount) + (this.Peab.currentPrice * this.Peab.amount);
  InformationsteknikTotalValue = (this.Starbreeze.currentPrice * this.Starbreeze.amount) + (this.Tobii.currentPrice * this.Tobii.amount);
  MaterialTotalValue = (this.BillerudKorsnas.currentPrice * this.BillerudKorsnas.amount);
  SallankopTotalValue = (this.Cloetta.currentPrice * this.Cloetta.amount) + (this.Hovding.currentPrice * this.Hovding.amount);
  FinansFastighetTotalValue = (this.Avanza.currentPrice * this.Avanza.amount) + (this.Handelsbanken.currentPrice * this.Handelsbanken.amount);
  TelekomTotalValue = (this.Bahnhof.currentPrice * this.Bahnhof.amount);
  EnergiTotalValue = 0;
  HalsaTotalValue = 0;
  OvrigtTotalValue = (this.Alibaba.currentPrice * this.Alibaba.amount) + (this.Amazon.currentPrice * this.Amazon.amount) + (this.NVIDIA.currentPrice * this.NVIDIA.amount) + (this.Tesla.currentPrice * this.Tesla.amount);


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
