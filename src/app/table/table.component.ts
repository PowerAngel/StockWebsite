import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  itemCount = 0;
  items = [];
  tablestocks = new DataTableResource(this.dataService.stocks);

  oldItemCount = 0;
  oldItems = [];
  oldTablestocks = new DataTableResource(this.dataService.oldStocks);

  industryCount = 0;
  industryitems = [];
  industries = new DataTableResource(this.dataService.industries);

  marketCount= 0;
  marketitems = [];
  markets = new DataTableResource(this.dataService.stockMarkets);

  constructor(private dataService: StocksService)
  {
    this.tablestocks.count().then(count => this.itemCount = count);
    this.oldTablestocks.count().then(count => this.oldItemCount = count);
    this.industries.count().then(industrycount => this.industryCount = industrycount);
    this.markets.count().then(marketcount => this.marketCount = marketcount);
  }

  reloadItems(params) {
    this.tablestocks.query(params).then(items => this.items = items);
  }

  reloadOldItems(params){
    this.oldTablestocks.query(params).then(items => this.oldItems = items);
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

  //Börser
  reloadMarkets(params) {
    this.markets.query(params).then(marketitems => this.marketitems = marketitems)
  }

  rowClickMarket(rowEvent){

  }

  rowDoubleClickMarket(rowEvent) {
    
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

  ngOnInit() {
  }

}
