import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() { }

  Actic = {
    name: 'Actic Group',
    ticker: '',
    industry: 'Dagligvaror',
    boughtFor: 52.62,
    amount: 17,
    currentPrice: 35,
    stockMarket: 'Stockholmsbörsen (Small Cap)',
    dividend: ''
  }

  AtlasCopco = {
    name: 'Atlas Copco B',
    ticker: '',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 282.70,
    amount: 10,
    currentPrice: 330,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 2.21
  }

  Kopparbergs = {
    name: 'Kopparbergs',
    ticker: '',
    industry: 'Dagligvaror',
    boughtFor: 233.15,
    amount: 10,
    currentPrice: 221.50,
    stockMarket: 'Nordic MTF',
    dividend: 2.66
  }

  Mycronic = {
    name: 'Mycronic',
    ticker: '',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.20,
    amount: 10,
    currentPrice: 100.75,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 2.33
  }

  NVIDIA = {
    name: 'NVIDIA Corp',
    ticker: '',
    industry: '',
    boughtFor: 898.66,
    amount: 1,
    currentPrice: 1686.80,
    stockMarket: 'NASDAQ',
    dividend: 0.29
  }

  Starbreeze = {
    name: 'Starbreeze B',
    ticker: '',
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

  Amazon = {
    name: 'Amazon',
    ticker: '',
    industry: '',
    boughtFor: 8756.88,
    amount: 1,
    currentPrice: 9199.85,
    stockMarket: 'NASDAQ',
    dividend: 0
  }

  ICA = {
    name: 'ICA Gruppen',
    ticker: '',
    industry: 'Dagligvaror',
    boughtFor: 312.86,
    amount: 7,
    currentPrice: 313.50,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.30
  }
  
  Alibaba = {
    name: 'Alibaba Group Holding Ltd',
    ticker: '',
    industry: '',
    boughtFor: 1024.81,
    amount: 1,
    currentPrice: 1471.96,
    stockMarket: 'NYSE',
    dividend: 0
  }

  Bahnhof = {
    name: 'Bahnhof B',
    ticker: '',
    industry: 'Telekomoperatörer',
    boughtFor: 18.20,
    amount: 40,
    currentPrice: 22,
    stockMarket: 'Aktietorget',
    dividend: 1.5
  }

  ClasOhlson = {
    name: 'Clas Ohlson AB B',
    ticker: '',
    industry: 'Dagligvaror',
    boughtFor: 147.75,
    amount: 6,
    currentPrice: 144.75,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 4.03
  }

  Peab = {
    name: 'Peab B',
    ticker: '',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 90.87,
    amount: 18,
    currentPrice: 82.20,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.13
  }

  BillerudKorsnas = {
    name: 'BillerudKorsnäs',
    ticker: '',
    industry: 'Material',
    boughtFor: 136.60,
    amount: 8,
    currentPrice: 144.80,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.37
  }

  Avanza = {
    name: 'Avanza ',
    ticker: '',
    industry: 'Finans & Fastighet',
    boughtFor: 334.85,
    amount: 6,
    currentPrice: 316.50,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 3.16
  }

  Hovding = {
    name: 'Hövding Sverige',
    ticker: '',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 20.90,
    amount: 30,
    currentPrice: 13.95,
    stockMarket: 'First North Stockholm',
    dividend: 0
  }

  Cloetta = {
    name: 'Cloetta',
    ticker: '',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 28,
    amount: 15,
    currentPrice: 27.60,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 2.72
  }

  Handelsbanken = {
    name: 'Handelsbanken',
    ticker: '',
    industry: 'Finans & Fastighet',
    boughtFor: 123,
    amount: 10,
    currentPrice: 120.60,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.04
  }

  Tobii = {
    name: 'Tobii',
    ticker: '',
    industry: 'Informationsteknik',
    boughtFor: 46.50,
    amount: 22,
    currentPrice: 41.20,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 0
  }

  stocks = [
    'Avanza', 'Atlas Copco', 'Amazon', 'Tesla'
  ];

  stockToBuy()
  {
    return 'The one with the best potential growth!';
  }
}
