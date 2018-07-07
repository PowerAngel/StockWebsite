import { Injectable } from '@angular/core';

@Injectable()
export class StocksService {

  constructor() {
    this.stocks.forEach(element => {
      element.totalCost = element.boughtFor * element.amount;
      element.totalValue = element.currentPrice * element.amount;
      element.yield = (element.currentPrice * element.amount) / (element.boughtFor * element.amount) - 1;
      element.dividendCost = element.dividend / element.boughtFor;
      element.dividendValue = element.dividend / element.currentPrice;

      this.totalCost += element.totalCost;
      this.totalValue += element.totalValue;
      this.totalDividend += element.dividend * element.amount;
      this.totalDividendSum += element.totalDividend;

      if(element.dividend === 0){
        this.totalValueNonDividendStocks += element.totalValue;
      }
      else{
        this.totalValueDividendStocks += element.totalValue;
      }

      this.industries.forEach(industry => {
          if(element.industry === industry.name)
          {
            industry.totalCost += element.totalCost;
            industry.totalValue += element.totalValue;
            industry.amount++;
          }
      });

      this.stockMarkets.forEach(market => {
        if(element.stockMarket === market.name){
          market.totalCost += element.totalCost;
          market.totalValue += element.totalValue;
          market.amount++;
        }
      })
    });

    this.industries.forEach(industry => {
      industry.yield = industry.totalValue / industry.totalCost -1;
      industry.portion = industry.totalValue / this.totalValue;
    });

    this.stockMarkets.forEach(market => {
      market.yield = market.totalValue / market.totalCost -1;
      market.portion = market.totalValue / this.totalValue;
    })

    this.totalDividendCost = this.totalDividend / this.totalCost;
    this.totalDividendValue = this.totalDividend / this.totalValue;
   }

  APIKey = "0DTMFM8K821YG008";

  totalCost = 0;
  totalValue = 0;
  totalDividend = 0;
  totalDividendSum = 0;
  totalDividendCost = 0;
  totalDividendValue = 0;
  totalValueDividendStocks = 0;
  totalValueNonDividendStocks = 0;

  Actic = {
    name: 'Actic Group',
    ticker: 'ATIC',
    industry: 'Dagligvaror',
    boughtFor: 52.62,
    amount: 17,
    currentPrice: 44.05,
    stockMarket: 'Stockholmsbörsen (Small Cap)',
    dividend: 0.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 8.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/742358/actic-group"
  }

  Alibaba = {
    name: 'Alibaba Group Holding Ltd',
    ticker: 'BABA',
    industry: 'Övrigt',
    boughtFor: 1292.155,
    amount: 2,
    currentPrice: 1676,
    stockMarket: 'NYSE',
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/506278/alibaba-group-holding-ltd"
  }

  Amazon = {
    name: 'Amazon',
    ticker: 'AMZN',
    industry: 'Övrigt',
    boughtFor: 8756.88,
    amount: 1,
    currentPrice: 14918,
    stockMarket: 'NASDAQ',
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/3986/amazon-com-inc"
  }

  AtlasCopco = {
    name: 'Atlas Copco B',
    ticker: 'ATCO B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 197.6,
    amount: 10,
    currentPrice: 215.7,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 7,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 95.6,
    url: "https://www.avanza.se/aktier/om-aktien.html/5235/atlas-copco-b"
  }

  Avanza = {
    name: 'Avanza ',
    ticker: 'AZA',
    industry: 'Finans & Fastighet',
    boughtFor: 331.14,
    amount: 8,
    currentPrice: 438.40,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 10.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 84,
    url: "https://www.avanza.se/aktier/om-aktien.html/5361/avanza-bank-holding"
  }

  Bahnhof = {
    name: 'Bahnhof B',
    ticker: 'BAHN B',
    industry: 'Telekomoperatörer',
    boughtFor: 18.20,
    amount: 40,
    currentPrice: 31.15,
    stockMarket: 'Aktietorget',
    dividend: 0.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 27,
    url: "https://www.avanza.se/aktier/om-aktien.html/106733/bahnhof-b"
  }

  BillerudKorsnas = {
    name: 'BillerudKorsnäs',
    ticker: 'BILL',
    industry: 'Material',
    boughtFor: 132.35,
    amount: 22,
    currentPrice: 124.4,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4.3,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 119,
    url: "https://www.avanza.se/aktier/om-aktien.html/5556/billerudkorsnas"
  }

  ClasOhlson = {
    name: 'Clas Ohlson AB B',
    ticker: 'CLAS B',
    industry: 'Dagligvaror',
    boughtFor: 140.25,
    amount: 6,
    currentPrice: 71.0,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 6.25,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 37.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/5457/clas-ohlson-b"
  }

  Cloetta = {
    name: 'Cloetta',
    ticker: 'CLA B',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 28,
    amount: 15,
    currentPrice: 27.54,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 0.75,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 22.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/163148/cloetta-b"
  }

  Epiroc = {
    name: 'Epiroc',
    ticker: 'EPI B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 85.1,
    amount: 10,
    currentPrice: 84.0,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 0.0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/861431/epiroc-b"
  }

  Handelsbanken = {
    name: 'Handelsbanken',
    ticker: 'SHB B',
    industry: 'Finans & Fastighet',
    boughtFor: 116.48,
    amount: 19,
    currentPrice: 101.8,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 5.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 105,
    url: "https://www.avanza.se/aktier/om-aktien.html/5265/handelsbanken-b"
  }

  Hovding = {
    name: 'Hövding Sverige',
    ticker: 'HOVD',
    industry: 'Sällanköpvaror & Tjänster',
    boughtFor: 14.03,
    amount: 70,
    currentPrice: 13.45,
    stockMarket: 'First North Stockholm',
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/572376/hovding-sverige"
  }

  ICA = {
    name: 'ICA Gruppen',
    ticker: 'ICA',
    industry: 'Dagligvaror',
    boughtFor: 305.56,
    amount: 9,
    currentPrice: 282.1,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 11,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 77,
    url: "https://www.avanza.se/aktier/om-aktien.html/31607/ica-gruppen"
  }

  JNJ = {
    name: 'Johnson & Johnson',
    ticker: 'JNJ',
    industry: 'Övrigt',
    boughtFor: 1086,
    amount: 1,
    currentPrice: 1097,
    stockMarket: 'NYSE',
    dividend: 31.55,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/3666/johnson---johnson"
  }

  Kopparbergs = {
    name: 'Kopparbergs',
    ticker: 'KOBR MTF B',
    industry: 'Dagligvaror',
    boughtFor: 233.15,
    amount: 10,
    currentPrice: 218.0,
    stockMarket: 'Nordic MTF',
    dividend: 5.9,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 89,
    url: "https://www.avanza.se/aktier/om-aktien.html/13477/kopparbergs-b"
  }

  Mycronic = {
    name: 'Mycronic',
    ticker: 'MYCR',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 93.91,
    amount: 21,
    currentPrice: 96.85,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 2.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 57.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/5466/mycronic"
  }

  NVIDIA = {
    name: 'NVIDIA Corp',
    ticker: 'NVDA',
    industry: 'Övrigt',
    boughtFor: 898.66,
    amount: 1,
    currentPrice: 2157,
    stockMarket: 'NASDAQ',
    dividend: 8.12,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 7.32,
    url: "https://www.avanza.se/aktier/om-aktien.html/4478/nvidia-corp"
  }

  Peab = {
    name: 'Peab B',
    ticker: 'PEAB B',
    industry: 'Industrivaror & Tjänster',
    boughtFor: 81.58,
    amount: 38,
    currentPrice: 67.80,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 4,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 163.2,
    url: "https://www.avanza.se/aktier/om-aktien.html/5330/peab-b"
  }

  Starbreeze = {
    name: 'Starbreeze B',
    ticker: 'STAR B',
    industry: 'Informationsteknik',
    boughtFor: 12.9,
    amount: 53,
    currentPrice: 10.21,
    stockMarket: 'First North Stockholm',
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/5528/starbreeze-b"
  }

  Tesla = {
    name: 'Tesla',
    ticker: 'TSLA',
    industry: 'Övrigt',
    boughtFor: 1740.52,
    amount: 1,
    currentPrice: 2694,
    stockMarket: 'NASDAQ',
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/238449/tesla-inc"
  }

  Tobii = {
    name: 'Tobii',
    ticker: 'TOBII',
    industry: 'Informationsteknik',
    boughtFor: 46.50,
    amount: 22,
    currentPrice: 36.58,
    stockMarket: 'Stockholmsbörsen (Mid Cap)',
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/556803/tobii"
  }

  stocks = [
    this.Actic, this.Alibaba, this.Amazon, this.AtlasCopco, this.Avanza, this.Bahnhof, this.BillerudKorsnas, this.ClasOhlson, this.Cloetta, this.Epiroc, this.Handelsbanken, this.Hovding, this.ICA, this.JNJ, this.Kopparbergs, this.Mycronic, this.NVIDIA, this.Peab, this.Starbreeze, this.Tesla, this.Tobii
  ];

  /* Branscher */
  Dagligvaror = {
    name: 'Dagligvaror',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Industrivaror = {
    name: 'Industrivaror & Tjänster',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Informationsteknik = {
    name: 'Informationsteknik',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Material = {
    name: 'Material',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Sallankop = {
    name: 'Sällanköpvaror & Tjänster',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  FinansFastighet = {
    name: 'Finans & Fastighet',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Telekom = {
    name: 'Telekomoperatörer',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Energi = {
    name: 'Energi',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Halsa = {
    name: 'Hälsa',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  Ovrigt = {
    name: 'Övrigt',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  industries = [
    this.Dagligvaror, this.Industrivaror, this.Informationsteknik, this.Material, this.Sallankop, this.FinansFastighet, this.Telekom, this.Energi, this.Halsa, this.Ovrigt
  ];

  /* Börser */
  Aktietorget = {
    name: 'Aktietorget',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  FirstNorth = {
    name: 'First North Stockholm',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  NASDAQ = {
    name: 'NASDAQ',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  NordicMTF = {
    name: 'Nordic MTF',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  NYSE = {
    name: 'NYSE',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  StockholmLarge = {
    name: 'Stockholmsbörsen (Large Cap)',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  StockholmMid = {
    name: 'Stockholmsbörsen (Mid Cap)',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  StockholmSmall = {
    name: 'Stockholmsbörsen (Small Cap)',
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  }

  stockMarkets = [
    this.Aktietorget, this.FirstNorth, this.NASDAQ, this.NordicMTF, this.NYSE, this.StockholmLarge, this.StockholmMid, this.StockholmSmall
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

  stockToBuy()
  {
    return 'The one with the best potential growth!';
  }
}
