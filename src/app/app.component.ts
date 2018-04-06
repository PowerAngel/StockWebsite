import { Component } from '@angular/core';
import { StocksService } from './stocks.service';
import { DataTableModule } from 'angular-4-data-table/src/index';
import { DataTableResource } from 'angular-4-data-table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  itemCount = 0;
  items = [];
  tablestocks = new DataTableResource(this.dataService.stocks);

  industryCount = 0;
  industryitems = [];
  industries = new DataTableResource(this.dataService.industries);

  constructor(private dataService: StocksService)
  {
    this.tablestocks.count().then(count => this.itemCount = count);
    this.industries.count().then(industrycount => this.industryCount = industrycount);
  }

  reloadItems(params) {
    this.tablestocks.query(params).then(items => this.items = items);
  }

  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    //alert('Double clicked: ' + rowEvent.row.item.url);
    window.open(rowEvent.row.item.url, "_blank");
  }

  //Branscher
  reloadIndustries(params) {
    this.industries.query(params).then(industryitems => this.industryitems = industryitems);
  }

  rowClickIndustry(rowEvent) {
    console.log('clicked: ' + rowEvent.row.item.name);
  }
  rowDoubleClickIndustry(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }
  

  title = 'app';
  stockToBuy = "";

  stocks = this.dataService.stocks; 

  totalCost = this.dataService.totalCost;
  totalValue = this.dataService.totalValue;
  yield = this.totalValue / this.totalCost -1;
  totalDividend = this.dataService.totalDividend;
  totalDividendSum = this.dataService.totalDividendSum;
  totalDividendCost = this.dataService.totalDividendCost;
  totalDividendValue = this.dataService.totalDividendValue;
}
