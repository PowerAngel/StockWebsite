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
    currentPrice: 36.6,
    stockMarket: 'Stockholmsbörsen (Small Cap)',
    dividend: 0
  }

  Alibaba = {
    name: 'Alibaba Group Holding Ltd',
    ticker: 'BABA',
    industry: '',
    boughtFor: 1024.81,
    amount: 1,
    currentPrice: 1468,
    stockMarket: 'NYSE',
    dividend: 0
  }

  Amazon = {
    name: 'Amazon',
    ticker: 'AMZN',
    industry: '',
    boughtFor: 8756.88,
    amount: 1,
    currentPrice: 9740,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  AtlasCopco = {
    name: 'Atlas Copco B',
    ticker: 'ATCO B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 282.70,
    amount: 10,
    currentPrice: 322.10,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.4
  }

  Avanza = {
    name: 'Avanza ',
    ticker: 'AZA',
    industry: 'Finans & Fastighet',
    boughtFor: 331.14,
    amount: 8,
    currentPrice: 341,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 10.5
  }

  Bahnhof = {
    name: 'Bahnhof B',
    ticker: 'BAHN B',
    industry: 'Telekomoperatörer',
    boughtFor: 18.20,
    amount: 40,
    currentPrice: 21.30,
    stockMarket: 'Aktietorget',
    dividend: 0.33
  }

  BillerudKorsnas = {
    name: 'BillerudKorsnäs',
    ticker: 'BILL',
    industry: 'Material',
    boughtFor: 136.60,
    amount: 8,
    currentPrice: 141.6,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.3
  }

  ClasOhlson = {
    name: 'Clas Ohlson AB B',
    ticker: 'CLAS B',
    industry: 'Dagligvaror',
    boughtFor: 140.25,
    amount: 6,
    currentPrice: 110.75,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 6.25
  }

  Cloetta = {
    name: 'Cloetta',
    ticker: 'CLA B',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 28,
    amount: 15,
    currentPrice: 29.8,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 0.75
  }

  Handelsbanken = {
    name: 'Handelsbanken',
    ticker: 'SHB B',
    industry: 'Finans & Fastighet',
    boughtFor: 119.86,
    amount: 14,
    currentPrice: 115.2,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 5
  }

  Hovding = {
    name: 'Hövding Sverige',
    ticker: 'HOVD',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 18.18,
    amount: 40,
    currentPrice: 12.9,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  ICA = {
    name: 'ICA Gruppen',
    ticker: 'ICA',
    industry: 'Dagligvaror',
    boughtFor: 312.86,
    amount: 7,
    currentPrice: 296.4,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 10.5
  }

  Kopparbergs = {
    name: 'Kopparbergs',
    ticker: 'KOBR MTF B',
    industry: 'Dagligvaror',
    boughtFor: 233.15,
    amount: 10,
    currentPrice: 190.5,
    stockMarket: 'Nordic MTF',
    dividend: 5.9
  }

  Mycronic = {
    name: 'Mycronic',
    ticker: 'MYCR',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.20,
    amount: 10,
    currentPrice: 88,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 2
  }

  NVIDIA = {
    name: 'NVIDIA Corp',
    ticker: 'NVDA',
    industry: '',
    boughtFor: 898.66,
    amount: 1,
    currentPrice: 1628,
    stockMarket: 'NASDAQ',
    dividend: 0.29
  }

  Peab = {
    name: 'Peab B',
    ticker: 'PEAB B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 85.2,
    amount: 30,
    currentPrice: 70.35,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.6
  }

  Starbreeze = {
    name: 'Starbreeze B',
    ticker: 'STAR B',
    industry: 'Informationsteknik',
    boughtFor: 13.23,
    amount: 50,
    currentPrice: 8.65,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  Tesla = {
    name: 'Tesla',
    ticker: 'TSLA',
    industry: '',
    boughtFor: 1740.52,
    amount: 1,
    currentPrice: 2711,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  Tobii = {
    name: 'Tobii',
    ticker: 'TOBII',
    industry: 'Informationsteknik',
    boughtFor: 46.50,
    amount: 22,
    currentPrice: 36.5,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 0
  }

  stocks = [
    this.Actic, this.Alibaba, this.Amazon, this.AtlasCopco, this.Avanza, this.Bahnhof, this.BillerudKorsnas, this.ClasOhlson, this.Cloetta, this.Handelsbanken, this.Hovding, this.ICA, this.Kopparbergs, this.Mycronic, this.NVIDIA, this.Peab, this.Starbreeze, this.Tesla, this.Tobii
  ];

  stockToBuy()
  {
    return 'The one with the best potential growth!';
  }
}
