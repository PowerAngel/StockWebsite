import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { StocksService } from '../stocks.service';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {

  constructor(private dataService: StocksService) { 

   this.dataService.stocks.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
   this.dataService.industries.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);

   //TotalCostStock
   this.dataService.stocks.forEach(element => {
    var tempObject = {name: element.name, y: element.boughtFor * element.amount};
    this.totalCostStockData.push(tempObject);
   });

   this.totalCostChart.addSerie({
     data: this.totalCostStockData
   })

   //TotalValueStock
   this.dataService.stocks.forEach(element => {
    var tempObject = {name: element.name, y: element.currentPrice * element.amount};
    this.totalValueStockData.push(tempObject);
   });

   this.totalValueChart.addSerie({
     data: this.totalValueStockData
   })

   //TotalCostIndustry
   this.dataService.industries.forEach(element => {
    var tempObject = {name: element.name, y: element.totalCost};
    this.totalCostIndustryData.push(tempObject);
   });

   this.totalCostPerIndustryChart.addSerie({
     data: this.totalCostIndustryData
   });

   //TotalValueIndustry
   this.dataService.industries.forEach(element => {
    var tempObject = {name: element.name, y: element.totalValue};
    this.totalValueIndustryData.push(tempObject);
   });

   this.totalValuePerIndustryChart.addSerie({
     data: this.totalCostIndustryData
   });

   //TotalCostMarket
   this.dataService.stockMarkets.forEach(element => {
    var tempObject = {name: element.name, y: element.totalCost}
    this.totalCostMarketData.push(tempObject);
   });

   this.totalCostPerStockMarket.addSerie({
     data: this.totalCostMarketData
    });

    //TotalValueMarket
   this.dataService.stockMarkets.forEach(element => {
    var tempObject = {name: element.name, y: element.totalValue}
    this.totalValueMarketData.push(tempObject);
   });

   this.totalValuePerStockMarket.addSerie({
     data: this.totalValueMarketData
    });
   
   //YearlyDividendSumShare
   this.dataService.stocks.forEach(element => {
      if(element.dividendYearlySum != 0)
      {
        var tempObject = {name: element.name, y: element.dividendYearlySum};
        this.yearlyDividendSumShareData.push(tempObject);
      }
    });

    this.yearlyDividendSumShareData.sort((a,b) => a.y < b.y ? -1 : a.y > b.y ? 1 : 0);

    this.yearlyDividendSumShare.addSerie({
      data: this.yearlyDividendSumShareData
    })

  }
  chartBackgroundColor = "#F5F5F5";
  ngOnInit() {
  }

  sortByValue(list = this.totalCostStockData){
    list.sort((a,b) => a.y < b.y ? -1 : a.y > b.y ? 1 : 0);
    return list;
  }
  sortByName(list = this.totalCostStockData){
    list.sort((a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    return list;
  }

  sortTotalCostStock(){
    if(this.sortedByName){
      this.totalCostStockData = this.sortByValue(this.totalCostStockData);
    }
    else if(!this.sortedByName){
      this.totalCostStockData = this.sortByName(this.totalCostStockData);
    }

    this.totalCostChart.removeSerie(0);
    
    this.totalCostChart.addSerie({
      data: this.totalCostStockData
    })

    this.sortedByName = !this.sortedByName;
  }

  sortTotalValueStock(){
    if(this.sortedByNameValue){
      this.totalValueStockData = this.sortByValue(this.totalValueStockData);
    }
    else if(!this.sortedByNameValue){
      this.totalValueStockData = this.sortByName(this.totalValueStockData);
    }

    this.totalValueChart.removeSerie(0);
    
    this.totalValueChart.addSerie({
      data: this.totalValueStockData
    })

    this.sortedByNameValue = !this.sortedByNameValue;
  }

sortedByName = true;
sortedByNameValue = true;

totalCostStockData = [];
totalValueStockData = [];
totalCostIndustryData = [];
totalValueIndustryData = [];
totalCostMarketData = [];
totalValueMarketData = [];
yearlyDividendSumShareData = [];

/*
*
*
*
* TOTALKOSTNAD PER AKTIE
*
*
*/
  totalCostChart = new Chart({
    chart: {
      type: 'pie',
      backgroundColor: this.chartBackgroundColor
    },
    title: {
      text: 'Totalkostnad per aktie'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: 'black'
            }
        },
        tooltip: {
          pointFormat: '{point.y:.2f} kr' 
        }
      }
    },
    series: []
  })



/*
*
*
*
* TOTALVÄRDE PER AKTIE
*
*
*/

  totalValueChart = new Chart({
    chart: {
      type: 'pie',
      backgroundColor: this.chartBackgroundColor
    },
    title: {
      text: 'Totalvärde per aktie'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: 'black'
            }
        },
        tooltip: {
          pointFormat: '{point.y:.2f} kr' 
        }
      }
    },
    series: []
  })


/*
*
*
*
* TOTALKOSTNAD PER BRANSCH
*
*
*/

  totalCostPerIndustryChart = new Chart({
    chart: {
      type: 'pie',
      backgroundColor: this.chartBackgroundColor
    },
    title: {
      text: 'Totalkostnad per bransch'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: 'black'
            }
        },
        tooltip: {
          pointFormat: '{point.y:.2f} kr' 
        }
      }
    },
    series: []
  })


  /*
  *
  *
  *
  * TOTALVÄRDE PER BRANSCH
  *
  *
  */

  totalValuePerIndustryChart = new Chart({
    chart: {
      type: 'pie',
      backgroundColor: this.chartBackgroundColor
    },
    title: {
      text: 'Totalvärde per bransch'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
                color: 'black'
            }
        },
        tooltip: {
          pointFormat: '{point.y:.2f} kr' 
        }
      }
    },
    series: []
  })

  /*
*
*
*
* Andel nuvarande värde som ger utdelning (uträknat genom kod)
*
*
*/

dividendPercentageChartByCode = new Chart({
  chart: {
    type: 'pie',
    backgroundColor: this.chartBackgroundColor
  },
  title: {
    text: 'Andel nuvarande värde som ger utdelning'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
              color: 'black'
          }
      },
      tooltip: {
        pointFormat: '{point.y:.2f} kr' 
      }
    }
  },
  series: [{
    data: [{
      name: 'Ger inte utdelning',
      y: (this.dataService.totalValueNonDividendStocks)
      },{
        name: 'Ger utdelning',        
        y: (this.dataService.totalValueDividendStocks)   
      }
    ]
  }]
})


/*
  *
  *
  *
  * TOTALVÄRDE PER BÖRS
  *
  *
  */

 totalValuePerStockMarket = new Chart({
  chart: {
    type: 'pie',
    backgroundColor: this.chartBackgroundColor
  },
  title: {
    text: 'Totalvärde per börs'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
              color: 'black'
          }
      },
      tooltip: {
        pointFormat: '{point.y:.2f} kr' 
      }
    }
  },
  series: []
})

/*
  *
  *
  *
  * TOTALKOSTNAD PER BÖRS
  *
  *
  */

 totalCostPerStockMarket = new Chart({
  chart: {
    type: 'pie',
    backgroundColor: this.chartBackgroundColor
  },
  title: {
    text: 'Totalkostnad per börs'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
              color: 'black'
          }
      },
      tooltip: {
        pointFormat: '{point.y:.2f} kr' 
      }
    }
  },
  series: []
})

/*
  *
  *
  *
  * ANDEL AV TOTAL ÅRLIG UTDELNING
  *
  *
  */

  yearlyDividendSumShare = new Chart({
  chart: {
    type: 'pie',
    backgroundColor: this.chartBackgroundColor
  },
  title: {
    text: 'Förväntad årlig utdelning per aktie'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
              color: 'black'
          }
      },
      tooltip: {
        pointFormat: '{point.y:.2f} kr' 
      }
    }
  },
  series: []
})

}
