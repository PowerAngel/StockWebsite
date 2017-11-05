import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() { }
  APIKey = "0DTMFM8K821YG008";

  Actic = {
    name: 'Actic Group',
    ticker: 'ATIC',
    industry: 'Dagligvaror',
    boughtFor: 52.62,
    amount: 17,
    currentPrice: 38.8,
    stockMarket: 'Stockholmsbörsen (Small Cap)',
    dividend: 0
  }

  Alibaba = {
    name: 'Alibaba Group Holding Ltd',
    ticker: 'BABA',
    industry: '',
    boughtFor: 1024.81,
    amount: 1,
    currentPrice: 1544.29,
    stockMarket: 'NYSE',
    dividend: 0
  }

  Amazon = {
    name: 'Amazon',
    ticker: 'AMZN',
    industry: '',
    boughtFor: 8756.88,
    amount: 1,
    currentPrice: 9369.73,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  AtlasCopco = {
    name: 'Atlas Copco B',
    ticker: 'ATCO B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 282.70,
    amount: 10,
    currentPrice: 338.10,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 2.21
  }

  Avanza = {
    name: 'Avanza ',
    ticker: 'AZA',
    industry: 'Finans & Fastighet',
    boughtFor: 335,
    amount: 6,
    currentPrice: 316.50,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.16
  }

  Bahnhof = {
    name: 'Bahnhof B',
    ticker: 'BAHN B',
    industry: 'Telekomoperatörer',
    boughtFor: 18.20,
    amount: 40,
    currentPrice: 22.8,
    stockMarket: 'Aktietorget',
    dividend: 1.5
  }

  BillerudKorsnas = {
    name: 'BillerudKorsnäs',
    ticker: 'BILL',
    industry: 'Material',
    boughtFor: 136.60,
    amount: 8,
    currentPrice: 146.10,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.37
  }

  ClasOhlson = {
    name: 'Clas Ohlson AB B',
    ticker: 'CLAS B',
    industry: 'Dagligvaror',
    boughtFor: 147.75,
    amount: 6,
    currentPrice: 145.75,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 4.03
  }

  Cloetta = {
    name: 'Cloetta',
    ticker: 'CLA B',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 28,
    amount: 15,
    currentPrice: 28.70,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 2.72
  }

  Handelsbanken = {
    name: 'Handelsbanken',
    ticker: 'SHB B',
    industry: 'Finans & Fastighet',
    boughtFor: 123,
    amount: 10,
    currentPrice: 120.10,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.04
  }

  Hovding = {
    name: 'Hövding Sverige',
    ticker: 'HOVD',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 20.90,
    amount: 30,
    currentPrice: 13.65,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  ICA = {
    name: 'ICA Gruppen',
    ticker: 'ICA',
    industry: 'Dagligvaror',
    boughtFor: 312.86,
    amount: 7,
    currentPrice: 309.90,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.30
  }

  Kopparbergs = {
    name: 'Kopparbergs',
    ticker: 'KOBR MTF B',
    industry: 'Dagligvaror',
    boughtFor: 233.15,
    amount: 10,
    currentPrice: 225.50,
    stockMarket: 'Nordic MTF',
    dividend: 2.66
  }

  Mycronic = {
    name: 'Mycronic',
    ticker: 'MYCR',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.20,
    amount: 10,
    currentPrice: 98.5,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 2.33
  }

  NVIDIA = {
    name: 'NVIDIA Corp',
    ticker: 'NVDA',
    industry: '',
    boughtFor: 898.66,
    amount: 1,
    currentPrice: 1759.06,
    stockMarket: 'NASDAQ',
    dividend: 0.29
  }

  Peab = {
    name: 'Peab B',
    ticker: 'PEAB B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.87,
    amount: 18,
    currentPrice: 82.75,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.13
  }

  Starbreeze = {
    name: 'Starbreeze B',
    ticker: 'STAR B',
    industry: 'Informationsteknik',
    boughtFor: 18.46,
    amount: 25,
    currentPrice: 8.2,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  Tesla = {
    name: 'Tesla',
    ticker: 'TSLA',
    industry: '',
    boughtFor: 1740.52,
    amount: 1,
    currentPrice: 2580.05,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  Tobii = {
    name: 'Tobii',
    ticker: 'TOBII',
    industry: 'Informationsteknik',
    boughtFor: 46.50,
    amount: 22,
    currentPrice: 43.90,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 0
  }

  stocks = [
    this.Actic, this.Alibaba, this.Amazon, this.AtlasCopco, this.Avanza, this.Bahnhof, this.BillerudKorsnas, this.ClasOhlson, this.Cloetta, this.Handelsbanken, this.Hovding, this.ICA, this.Kopparbergs, this.Mycronic, this.NVIDIA, this.Peab, this.Starbreeze, this.Tesla, this.Tobii
  ];

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

  TotalCost = this.DagligvarorTotalCost + this.IndustrivarorTotalCost + this.InformationsteknikTotalCost + this.MaterialTotalCost + this.SallankopTotalCost + this.FinansFastighetTotalCost + this.TelekomTotalCost + this.EnergiTotalCost + this.HalsaTotalCost + this.OvrigtToalCost;
  TotalValue = this.DagligvarorTotalValue + this.IndustrivarorTotalValue + this.InformationsteknikTotalValue + this.MaterialTotalValue + this.SallankopTotalValue + this.FinansFastighetTotalValue + this.TelekomTotalValue + this.EnergiTotalValue + this.HalsaTotalValue + this.OvrigtTotalValue;

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

  stockToBuy()
  {
    return 'The one with the best potential growth!';
  }
}
