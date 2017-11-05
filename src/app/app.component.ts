import { Component } from '@angular/core';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: StocksService)
  {

  }
  
  title = 'app';
  stockToBuy = "";
  Tesla = this.dataService.Tesla;
  Amazon = this.dataService.Amazon;
  AmazonTotalCost = this.Amazon.boughtFor * this.Amazon.amount;
  stocks = this.dataService.stocks;

  ngOnInit() {
    this.stockToBuy = this.dataService.stockToBuy();
  }

  calcValue(cost :number, amount: number)
  {
    
  }
}
