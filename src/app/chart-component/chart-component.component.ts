import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { StocksService } from '../stocks.service';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponentComponent implements OnInit {

  constructor(private dataService: StocksService) { }
  chartBackgroundColor = "#F5F5F5";
  ngOnInit() {
  }

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
    series: [{
      data: [{
        name: this.dataService.Actic.name,
        y: this.dataService.Actic.boughtFor * this.dataService.Actic.amount
        },{
        name: this.dataService.Alibaba.name,
        y: this.dataService.Alibaba.boughtFor * this.dataService.Alibaba.amount
        },{
        name: this.dataService.Amazon.name,
        y: this.dataService.Amazon.boughtFor * this.dataService.Amazon.amount
        },{
        name: this.dataService.AtlasCopco.name,
        y: this.dataService.AtlasCopco.boughtFor * this.dataService.AtlasCopco.amount
        },{
        name: this.dataService.Avanza.name,
        y: this.dataService.Avanza.boughtFor * this.dataService.Avanza.amount
        },{
        name: this.dataService.Bahnhof.name,
        y: this.dataService.Bahnhof.boughtFor * this.dataService.Bahnhof.amount
        },{
        name: this.dataService.BillerudKorsnas.name,
        y: this.dataService.BillerudKorsnas.boughtFor * this.dataService.BillerudKorsnas.amount
        },{
        name: this.dataService.ClasOhlson.name,
        y: this.dataService.ClasOhlson.boughtFor * this.dataService.ClasOhlson.amount
        },{
        name: this.dataService.Cloetta.name,
        y: this.dataService.Cloetta.boughtFor * this.dataService.Cloetta.amount
        },{
        name: this.dataService.Epiroc.name,
        y: this.dataService.Epiroc.boughtFor * this.dataService.Epiroc.amount
        },{
        name: this.dataService.Handelsbanken.name,
        y: this.dataService.Handelsbanken.boughtFor * this.dataService.Handelsbanken.amount
        },{
        name: this.dataService.Hovding.name,
        y: this.dataService.Hovding.boughtFor * this.dataService.Hovding.amount
        },{
        name: this.dataService.ICA.name,
        y: this.dataService.ICA.boughtFor * this.dataService.ICA.amount
        },{
        name: this.dataService.Kopparbergs.name,
        y: this.dataService.Kopparbergs.boughtFor * this.dataService.Kopparbergs.amount
        },{
        name: this.dataService.Mycronic.name,
        y: this.dataService.Mycronic.boughtFor * this.dataService.Mycronic.amount
        },{
        name: this.dataService.NVIDIA.name,
        y: this.dataService.NVIDIA.boughtFor * this.dataService.NVIDIA.amount
        },{
        name: this.dataService.Peab.name,
        y: this.dataService.Peab.boughtFor * this.dataService.Peab.amount
        },{
        name: this.dataService.Starbreeze.name,
        y: this.dataService.Starbreeze.boughtFor * this.dataService.Starbreeze.amount
        },{
        name: this.dataService.Tesla.name,
        y: this.dataService.Tesla.boughtFor * this.dataService.Tesla.amount
        },{
        name: this.dataService.Tobii.name,
        y: this.dataService.Tobii.boughtFor * this.dataService.Tobii.amount
        },
      ]
    }]
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
    series: [{
      data: [{
        name: this.dataService.Actic.name,
        y: this.dataService.Actic.currentPrice * this.dataService.Actic.amount
        },{
        name: this.dataService.Alibaba.name,
        y: this.dataService.Alibaba.currentPrice * this.dataService.Alibaba.amount
        },{
        name: this.dataService.Amazon.name,
        y: this.dataService.Amazon.currentPrice * this.dataService.Amazon.amount
        },{
        name: this.dataService.AtlasCopco.name,
        y: this.dataService.AtlasCopco.currentPrice * this.dataService.AtlasCopco.amount
        },{
        name: this.dataService.Avanza.name,
        y: this.dataService.Avanza.currentPrice * this.dataService.Avanza.amount
        },{
        name: this.dataService.Bahnhof.name,
        y: this.dataService.Bahnhof.currentPrice * this.dataService.Bahnhof.amount
        },{
        name: this.dataService.BillerudKorsnas.name,
        y: this.dataService.BillerudKorsnas.currentPrice * this.dataService.BillerudKorsnas.amount
        },{
        name: this.dataService.ClasOhlson.name,
        y: this.dataService.ClasOhlson.currentPrice * this.dataService.ClasOhlson.amount
        },{
        name: this.dataService.Cloetta.name,
        y: this.dataService.Cloetta.currentPrice * this.dataService.Cloetta.amount
        },{
        name: this.dataService.Epiroc.name,
        y: this.dataService.Epiroc.currentPrice * this.dataService.Epiroc.amount
        },{
        name: this.dataService.Handelsbanken.name,
        y: this.dataService.Handelsbanken.currentPrice * this.dataService.Handelsbanken.amount
        },{
        name: this.dataService.Hovding.name,
        y: this.dataService.Hovding.currentPrice * this.dataService.Hovding.amount
        },{
        name: this.dataService.ICA.name,
        y: this.dataService.ICA.currentPrice * this.dataService.ICA.amount
        },{
        name: this.dataService.Kopparbergs.name,
        y: this.dataService.Kopparbergs.currentPrice * this.dataService.Kopparbergs.amount
        },{
        name: this.dataService.Mycronic.name,
        y: this.dataService.Mycronic.currentPrice * this.dataService.Mycronic.amount
        },{
        name: this.dataService.NVIDIA.name,
        y: this.dataService.NVIDIA.currentPrice * this.dataService.NVIDIA.amount
        },{
        name: this.dataService.Peab.name,
        y: this.dataService.Peab.currentPrice * this.dataService.Peab.amount
        },{
        name: this.dataService.Starbreeze.name,
        y: this.dataService.Starbreeze.currentPrice * this.dataService.Starbreeze.amount
        },{
        name: this.dataService.Tesla.name,
        y: this.dataService.Tesla.currentPrice * this.dataService.Tesla.amount
        },{
        name: this.dataService.Tobii.name,
        y: this.dataService.Tobii.currentPrice * this.dataService.Tobii.amount
        },
      ]
    }]
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
    series: [{
      data: [{
        name: 'Dagligvaror',
        y: this.dataService.DagligvarorTotalCost
        },{
          name: 'Industrivaror & Tjänster',   
          y: this.dataService.IndustrivarorTotalCost     
        },{
          name: 'Informationsteknik',
          y: this.dataService.InformationsteknikTotalCost
        },{
          name: 'Material',
          y: this.dataService.MaterialTotalCost
        }, {
          name: 'Okänd',
          y: this.dataService.OvrigtToalCost
        }, {
          name: 'Sällanköpvaror & Tjänster',
          y: this.dataService.SallankopTotalCost
        }, {
          name: 'Finans & Fastighet',
          y: this.dataService.FinansFastighetTotalCost
        }, {
          name: 'Telekomoperatörer',
          y: this.dataService.TelekomTotalCost
        }
      ]
    }]
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
    series: [{
      data: [{
        name: 'Dagligvaror',
        y: this.dataService.DagligvarorTotalValue
        },{
          name: 'Industrivaror & Tjänster',   
          y: this.dataService.IndustrivarorTotalValue     
        },{
          name: 'Informationsteknik',
          y: this.dataService.InformationsteknikTotalValue
        },{
          name: 'Material',
          y: this.dataService.MaterialTotalValue
        }, {
          name: 'Okänd',
          y: this.dataService.OvrigtTotalValue
        }, {
          name: 'Sällanköpvaror & Tjänster',
          y: this.dataService.SallankopTotalValue
        }, {
          name: 'Finans & Fastighet',
          y: this.dataService.FinansFastighetTotalValue
        }, {
          name: 'Telekomoperatörer',
          y: this.dataService.TelekomTotalValue
        }
      ]
    }]
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

}
