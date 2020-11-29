import { Injectable } from "@angular/core";

export interface Stock {
  name: string;
  ticker: string;
  industry: string;
  boughtFor: number;
  amount: number;
  currentPrice: number;
  stockMarket: string;
  dividend: number;
  totalCost: number;
  totalValue: number;
  yield: number;
  dividendCost: number;
  dividendValue: number;
  dividendYearlySum: number;
  totalDividend: number;
  url: string;
}

@Injectable()
export class StocksService {
  constructor() {
    this.stocks.forEach(element => {
      element.totalCost = element.boughtFor * element.amount;
      element.totalValue = element.currentPrice * element.amount;
      element.yield =
        (element.currentPrice * element.amount) /
          (element.boughtFor * element.amount) -
        1;
      element.dividendCost = element.dividend / element.boughtFor;
      element.dividendValue = element.dividend / element.currentPrice;
      element.dividendYearlySum = element.dividend * element.amount;

      this.totalCost += element.totalCost;
      this.totalValue += element.totalValue;
      this.totalDividend += element.dividend * element.amount;
      this.totalDividendSum += element.totalDividend;

      if (element.dividend === 0) {
        this.totalValueNonDividendStocks += element.totalValue;
      } else {
        this.totalValueDividendStocks += element.totalValue;
      }

      this.industries.forEach(industry => {
        if (element.industry === industry.name) {
          industry.totalCost += element.totalCost;
          industry.totalValue += element.totalValue;
          industry.amount++;
        }
      });

      this.stockMarkets.forEach(market => {
        if (element.stockMarket === market.name) {
          market.totalCost += element.totalCost;
          market.totalValue += element.totalValue;
          market.amount++;
        }
      });
    });

    this.oldStocks.forEach(element => {
      element.totalCost = element.boughtFor * element.amount;
      element.totalValue = element.currentPrice * element.amount;
      element.yield =
        (element.currentPrice * element.amount) /
          (element.boughtFor * element.amount) -
        1;
      element.dividendCost = element.dividend / element.boughtFor;
      element.dividendValue = element.dividend / element.currentPrice;
      element.dividendYearlySum = element.dividend * element.amount;
    });

    this.industries.forEach(industry => {
      industry.yield = industry.totalValue / industry.totalCost - 1;
      industry.portion = industry.totalValue / this.totalValue;
    });

    this.stockMarkets.forEach(market => {
      market.yield = market.totalValue / market.totalCost - 1;
      market.portion = market.totalValue / this.totalValue;
    });

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
  annualDividend = 0;

  //Old stocks

  Actic: Stock = {
    name: "Actic Group",
    ticker: "ATIC",
    industry: "Dagligvaror",
    boughtFor: 52.62,
    amount: 17,
    currentPrice: 40.5,
    stockMarket: "Stockholmsbörsen (Small Cap)",
    dividend: 0.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 8.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/742358/actic-group"
  };

  ClasOhlson: Stock = {
    name: "Clas Ohlson AB B",
    ticker: "CLAS B",
    industry: "Dagligvaror",
    boughtFor: 140.25,
    amount: 6,
    currentPrice: 89.0,
    stockMarket: "Stockholmsbörsen (Mid Cap)",
    dividend: 6.25,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 75,
    url: "https://www.avanza.se/aktier/om-aktien.html/5457/clas-ohlson-b"
  };

  Tesla: Stock = {
    name: "Tesla",
    ticker: "TSLA",
    industry: "Industrivaror & Tjänster",
    boughtFor: 1740.52,
    amount: 1,
    currentPrice: 8968,
    stockMarket: "NASDAQ",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/238449/tesla-inc"
  };

  Tesla2: Stock = {
    name: "Tesla",
    ticker: "TSLA",
    industry: "Industrivaror & Tjänster",
    boughtFor: 5922.0,
    amount: 1,
    currentPrice: 15999,
    stockMarket: "NASDAQ",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/238449/tesla-inc"
  };

  //Currently own

  Acconeer: Stock = {
    name: "Acconeer",
    ticker: "ACCON",
    industry: "Informationsteknik",
    boughtFor: 18.49,
    amount: 381,
    currentPrice: 18.48,
    stockMarket: "First North Stockholm",
    dividend: 0.0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/808452/acconeer"
  };

  Alibaba: Stock = {
    name: "Alibaba Group Holding Ltd",
    ticker: "BABA",
    industry: "Övrigt",
    boughtFor: 1292.155,
    amount: 2,
    currentPrice: 2348.5,
    stockMarket: "NYSE",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url:
      "https://www.avanza.se/aktier/om-aktien.html/506278/alibaba-group-holding-ltd"
  };

  Amazon: Stock = {
    name: "Amazon",
    ticker: "AMZN",
    industry: "Övrigt",
    boughtFor: 8756.88,
    amount: 1,
    currentPrice: 27149,
    stockMarket: "NASDAQ",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/3986/amazon-com-inc"
  };

  AtlasCopco: Stock = {
    name: "Atlas Copco B",
    ticker: "ATCO B",
    industry: "Industrivaror & Tjänster",
    boughtFor: 212.54,
    amount: 17,
    currentPrice: 382.0,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 7,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 255.6,
    url: "https://www.avanza.se/aktier/om-aktien.html/5235/atlas-copco-b"
  };

  Avanza: Stock = {
    name: "Avanza ",
    ticker: "AZA",
    industry: "Finans & Fastighet",
    boughtFor: 69.91,
    amount: 58,
    currentPrice: 185.1,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 2.1,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 304,
    url: "https://www.avanza.se/aktier/om-aktien.html/5361/avanza-bank-holding"
  };

  Bahnhof: Stock = {
    name: "Bahnhof B",
    ticker: "BAHN B",
    industry: "Telekomoperatörer",
    boughtFor: 22.84,
    amount: 140,
    currentPrice: 30.85,
    stockMarket: "Aktietorget",
    dividend: 0.6,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 104,
    url: "https://www.avanza.se/aktier/om-aktien.html/106733/bahnhof-b"
  };

  BillerudKorsnas: Stock = {
    name: "BillerudKorsnäs",
    ticker: "BILL",
    industry: "Material",
    boughtFor: 121.48,
    amount: 41,
    currentPrice: 140.5,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 4.3,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 460.85,
    url: "https://www.avanza.se/aktier/om-aktien.html/5556/billerudkorsnas"
  };

  Cloetta: Stock = {
    name: "Cloetta",
    ticker: "CLA B",
    industry: "Sällanköpvaror & Tjänster",
    boughtFor: 28,
    amount: 15,
    currentPrice: 23.84,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 0.75,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 45.0,
    url: "https://www.avanza.se/aktier/om-aktien.html/163148/cloetta-b"
  };

  Epiroc: Stock = {
    name: "Epiroc",
    ticker: "EPI B",
    industry: "Industrivaror & Tjänster",
    boughtFor: 85.42,
    amount:55,
    currentPrice: 137.45,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 2.4,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 67.2,
    url: "https://www.avanza.se/aktier/om-aktien.html/861431/epiroc-b"
  };

  Handelsbanken: Stock = {
    name: "Handelsbanken",
    ticker: "SHB B",
    industry: "Finans & Fastighet",
    boughtFor: 90.61,
    amount: 100,
    currentPrice: 88.22,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 5.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 308.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/5265/handelsbanken-b"
  };

  Hovding: Stock = {
    name: "Hövding Sverige",
    ticker: "HOVD",
    industry: "Sällanköpvaror & Tjänster",
    boughtFor: 13.37,
    amount: 129,
    currentPrice: 21.8,
    stockMarket: "First North Stockholm",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/572376/hovding-sverige"
  };

  ICA: Stock = {
    name: "ICA Gruppen",
    ticker: "ICA",
    industry: "Dagligvaror",
    boughtFor: 318.2,
    amount: 13,
    currentPrice: 411.6,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 11.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 347.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/31607/ica-gruppen"
  };

  JNJ: Stock = {
    name: "Johnson & Johnson",
    ticker: "JNJ",
    industry: "Hälsa",
    boughtFor: 1248.0,
    amount: 3,
    currentPrice: 1225.3,
    stockMarket: "NYSE",
    dividend: 49.53,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 115.04,
    url: "https://www.avanza.se/aktier/om-aktien.html/3666/johnson---johnson"
  };

  Kopparbergs: Stock = {
    name: "Kopparbergs",
    ticker: "KOBR MTF B",
    industry: "Dagligvaror",
    boughtFor: 233.15,
    amount: 10,
    currentPrice: 173.5,
    stockMarket: "Nordic MTF",
    dividend: 5.9,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 197.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/13477/kopparbergs-b"
  };

  Mastercard: Stock = {
    name: "Mastercard Inc",
    ticker: "MA",
    industry: "Finans & Fastighet",
    boughtFor: 2758.25,
    amount: 4,
    currentPrice: 2881.75,
    stockMarket: "NYSE",
    dividend: 15.7,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 13.83,
    url: "https://www.avanza.se/aktier/om-aktien.html/51149/mastercard-inc"
  };

  Match: Stock = {
    name: "Match Group Inc",
    ticker: "MTCH",
    industry: "Övrigt",
    boughtFor: 714.0,
    amount: 7,
    currentPrice: 1186.43,
    stockMarket: "NASDAQ",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/608456/match-group-inc"
  };

  /*MTG = {
    name: 'Modern Times Group',
    ticker: 'MTG B',
    industry: 'Dagligvaror',
    boughtFor: 306.93,
    amount: 14,
    currentPrice: 334.6,
    stockMarket: 'Stockholmsbörsen (Large Cap)',
    dividend: 6.5,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 12,
    url: "https://www.avanza.se/aktier/om-aktien.html/5438/modern-times-group-b"
  }*/

  MTG: Stock = {
    name: "Modern Times Group",
    ticker: "MTG B",
    industry: "Dagligvaror",
    boughtFor: 95.2,
    amount: 67,
    currentPrice: 129.3,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 12,
    url: "https://www.avanza.se/aktier/om-aktien.html/5438/modern-times-group-b"
  };

  Mycronic: Stock = {
    name: "Mycronic",
    ticker: "MYCR",
    industry: "Industrivaror & Tjänster",
    boughtFor: 93.04,
    amount: 27,
    currentPrice: 225.6,
    stockMarket: "Stockholmsbörsen (Mid Cap)",
    dividend: 3,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 192.5,
    url: "https://www.avanza.se/aktier/om-aktien.html/5466/mycronic"
  };

  NVIDIA: Stock = {
    name: "NVIDIA Corp",
    ticker: "NVDA",
    industry: "Informationsteknik",
    boughtFor: 1101.83,
    amount: 2,
    currentPrice: 4507.0,
    stockMarket: "NASDAQ",
    dividend: 5.79,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 26.79,
    url: "https://www.avanza.se/aktier/om-aktien.html/4478/nvidia-corp"
  };

  Peab: Stock = {
    name: "Peab B",
    ticker: "PEAB B",
    industry: "Industrivaror & Tjänster",
    boughtFor: 74.64,
    amount: 93,
    currentPrice: 97.55,
    stockMarket: "Stockholmsbörsen (Large Cap)",
    dividend: 4.2,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 356.4,
    url: "https://www.avanza.se/aktier/om-aktien.html/5330/peab-b"
  };

  Starbreeze: Stock = {
    name: "Starbreeze B",
    ticker: "STAR B",
    industry: "Informationsteknik",
    boughtFor: 4.22,
    amount: 400,
    currentPrice: 1.056,
    stockMarket: "First North Stockholm",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/5528/starbreeze-b"
  };

  Tobii: Stock = {
    name: "Tobii",
    ticker: "TOBII",
    industry: "Informationsteknik",
    boughtFor: 33.2,
    amount: 222,
    currentPrice: 54.6,
    stockMarket: "Stockholmsbörsen (Mid Cap)",
    dividend: 0,
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    dividendCost: 0,
    dividendValue: 0,
    dividendYearlySum: 0,
    totalDividend: 0,
    url: "https://www.avanza.se/aktier/om-aktien.html/556803/tobii"
  };

  stocks = [
    this.Acconeer,
    this.Alibaba,
    this.Amazon,
    this.AtlasCopco,
    this.Avanza,
    this.Bahnhof,
    this.BillerudKorsnas,
    this.Cloetta,
    this.Epiroc,
    this.Handelsbanken,
    this.Hovding,
    this.ICA,
    this.JNJ,
    this.Kopparbergs,
    this.Mastercard,
    this.Match,
    this.MTG,
    this.Mycronic,
    this.NVIDIA,
    this.Peab,
    this.Starbreeze,
    this.Tobii
  ];

  oldStocks = [this.Actic, this.ClasOhlson, this.Tesla, this.Tesla2];

  /* Branscher */
  Dagligvaror = {
    name: "Dagligvaror",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Industrivaror = {
    name: "Industrivaror & Tjänster",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Informationsteknik = {
    name: "Informationsteknik",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Material = {
    name: "Material",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Sallankop = {
    name: "Sällanköpvaror & Tjänster",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  FinansFastighet = {
    name: "Finans & Fastighet",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Telekom = {
    name: "Telekomoperatörer",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Energi = {
    name: "Energi",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Halsa = {
    name: "Hälsa",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  Ovrigt = {
    name: "Övrigt",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  industries = [
    this.Dagligvaror,
    this.Industrivaror,
    this.Informationsteknik,
    this.Material,
    this.Sallankop,
    this.FinansFastighet,
    this.Telekom,
    this.Energi,
    this.Halsa,
    this.Ovrigt
  ];

  /* Börser */
  Aktietorget = {
    name: "Aktietorget",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  FirstNorth = {
    name: "First North Stockholm",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  NASDAQ = {
    name: "NASDAQ",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  NordicMTF = {
    name: "Nordic MTF",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  NYSE = {
    name: "NYSE",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  StockholmLarge = {
    name: "Stockholmsbörsen (Large Cap)",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  StockholmMid = {
    name: "Stockholmsbörsen (Mid Cap)",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  StockholmSmall = {
    name: "Stockholmsbörsen (Small Cap)",
    totalCost: 0,
    totalValue: 0,
    yield: 0,
    amount: 0,
    portion: 0
  };

  stockMarkets = [
    this.Aktietorget,
    this.FirstNorth,
    this.NASDAQ,
    this.NordicMTF,
    this.NYSE,
    this.StockholmLarge,
    this.StockholmMid,
    this.StockholmSmall
  ];

  DagligvarorTotalCost =
    this.Actic.boughtFor * this.Actic.amount +
    this.ClasOhlson.boughtFor * this.ClasOhlson.amount +
    this.ICA.boughtFor * this.ICA.amount +
    this.Kopparbergs.boughtFor * this.Kopparbergs.amount +
    this.MTG.boughtFor * this.MTG.amount;
  IndustrivarorTotalCost =
    this.AtlasCopco.boughtFor * this.AtlasCopco.amount +
    this.Mycronic.boughtFor * this.Mycronic.amount +
    this.Peab.boughtFor * this.Peab.amount;
  InformationsteknikTotalCost =
    this.Starbreeze.boughtFor * this.Starbreeze.amount +
    this.Tobii.boughtFor * this.Tobii.amount +
    this.Acconeer.boughtFor * this.Acconeer.amount;
  MaterialTotalCost =
    this.BillerudKorsnas.boughtFor * this.BillerudKorsnas.amount;
  SallankopTotalCost =
    this.Cloetta.boughtFor * this.Cloetta.amount +
    this.Hovding.boughtFor * this.Hovding.amount;
  FinansFastighetTotalCost =
    this.Avanza.boughtFor * this.Avanza.amount +
    this.Handelsbanken.boughtFor * this.Handelsbanken.amount +
    this.Mastercard.boughtFor * this.Mastercard.amount;
  TelekomTotalCost = this.Bahnhof.boughtFor * this.Bahnhof.amount;
  EnergiTotalCost = 0;
  HalsaTotalCost = 0;
  OvrigtToalCost =
    this.Alibaba.boughtFor * this.Alibaba.amount +
    this.Amazon.boughtFor * this.Amazon.amount +
    this.NVIDIA.boughtFor * this.NVIDIA.amount;

  DagligvarorTotalValue =
    this.Actic.currentPrice * this.Actic.amount +
    this.ClasOhlson.currentPrice * this.ClasOhlson.amount +
    this.ICA.currentPrice * this.ICA.amount +
    this.Kopparbergs.currentPrice * this.Kopparbergs.amount +
    this.MTG.currentPrice * this.MTG.amount;
  IndustrivarorTotalValue =
    this.AtlasCopco.currentPrice * this.AtlasCopco.amount +
    this.Mycronic.currentPrice * this.Mycronic.amount +
    this.Peab.currentPrice * this.Peab.amount;
  InformationsteknikTotalValue =
    this.Starbreeze.currentPrice * this.Starbreeze.amount +
    this.Tobii.currentPrice * this.Tobii.amount +
    this.Acconeer.currentPrice * this.Acconeer.amount;
  MaterialTotalValue =
    this.BillerudKorsnas.currentPrice * this.BillerudKorsnas.amount;
  SallankopTotalValue =
    this.Cloetta.currentPrice * this.Cloetta.amount +
    this.Hovding.currentPrice * this.Hovding.amount;
  FinansFastighetTotalValue =
    this.Avanza.currentPrice * this.Avanza.amount +
    this.Handelsbanken.currentPrice * this.Handelsbanken.amount +
    this.Mastercard.currentPrice * this.Mastercard.amount;
  TelekomTotalValue = this.Bahnhof.currentPrice * this.Bahnhof.amount;
  EnergiTotalValue = 0;
  HalsaTotalValue = 0;
  OvrigtTotalValue =
    this.Alibaba.currentPrice * this.Alibaba.amount +
    this.Amazon.currentPrice * this.Amazon.amount +
    this.NVIDIA.currentPrice * this.NVIDIA.amount;

  stockToBuy() {
    return "The one with the best potential growth!";
  }
}
