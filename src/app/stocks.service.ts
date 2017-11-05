import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() { }

  Actic = {
    name: 'Actic Group',
    ticker: 'ATIC',
    industry: 'Dagligvaror',
    boughtFor: 52.62,
    amount: 17,
    currentPrice: 35,
    stockMarket: 'Stockholmsbörsen (Small Cap)',
    dividend: 0
  }

  Alibaba = {
    name: 'Alibaba Group Holding Ltd',
    ticker: 'BABA',
    industry: '',
    boughtFor: 1024.81,
    amount: 1,
    currentPrice: 1471.96,
    stockMarket: 'NYSE',
    dividend: 0
  }

  Amazon = {
    name: 'Amazon',
    ticker: 'AMZN',
    industry: '',
    boughtFor: 8756.88,
    amount: 1,
    currentPrice: 9199.85,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  AtlasCopco = {
    name: 'Atlas Copco B',
    ticker: 'ATCO B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 282.70,
    amount: 10,
    currentPrice: 330,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 2.21
  }

  Avanza = {
    name: 'Avanza ',
    ticker: 'AZA',
    industry: 'Finans & Fastighet',
    boughtFor: 334.85,
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
    currentPrice: 22,
    stockMarket: 'Aktietorget',
    dividend: 1.5
  }

  BillerudKorsnas = {
    name: 'BillerudKorsnäs',
    ticker: 'BILL',
    industry: 'Material',
    boughtFor: 136.60,
    amount: 8,
    currentPrice: 144.80,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.37
  }

  ClasOhlson = {
    name: 'Clas Ohlson AB B',
    ticker: 'CLAS B',
    industry: 'Dagligvaror',
    boughtFor: 147.75,
    amount: 6,
    currentPrice: 144.75,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 4.03
  }

  Cloetta = {
    name: 'Cloetta',
    ticker: 'CLA B',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 28,
    amount: 15,
    currentPrice: 27.60,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 2.72
  }

  Handelsbanken = {
    name: 'Handelsbanken',
    ticker: 'SHB B',
    industry: 'Finans & Fastighet',
    boughtFor: 123,
    amount: 10,
    currentPrice: 120.60,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.04
  }

  Hovding = {
    name: 'Hövding Sverige',
    ticker: 'HOVD',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 20.90,
    amount: 30,
    currentPrice: 13.95,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  ICA = {
    name: 'ICA Gruppen',
    ticker: 'ICA',
    industry: 'Dagligvaror',
    boughtFor: 312.86,
    amount: 7,
    currentPrice: 313.50,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.30
  }

  Kopparbergs = {
    name: 'Kopparbergs',
    ticker: 'KOBR MTF B',
    industry: 'Dagligvaror',
    boughtFor: 233.15,
    amount: 10,
    currentPrice: 221.50,
    stockMarket: 'Nordic MTF',
    dividend: 2.66
  }

  Mycronic = {
    name: 'Mycronic',
    ticker: 'MYCR',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.20,
    amount: 10,
    currentPrice: 100.75,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 2.33
  }

  NVIDIA = {
    name: 'NVIDIA Corp',
    ticker: 'NVDA',
    industry: '',
    boughtFor: 898.66,
    amount: 1,
    currentPrice: 1686.80,
    stockMarket: 'NASDAQ',
    dividend: 0.29
  }

  Peab = {
    name: 'Peab B',
    ticker: 'PEAB B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.87,
    amount: 18,
    currentPrice: 82.20,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.13
  }

  Starbreeze = {
    name: 'Starbreeze B',
    ticker: 'STAR B',
    industry: 'Informationsteknik',
    boughtFor: 18.46,
    amount: 25,
    currentPrice: 8.85,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  Tesla = {
    name: 'Tesla',
    ticker: 'TSLA',
    industry: '',
    boughtFor: 1740.52,
    amount: 1,
    currentPrice: 2681.28,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  Tobii = {
    name: 'Tobii',
    ticker: 'TOBII',
    industry: 'Informationsteknik',
    boughtFor: 46.50,
    amount: 22,
    currentPrice: 41.20,
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
