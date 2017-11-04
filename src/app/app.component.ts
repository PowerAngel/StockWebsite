import { Component } from '@angular/core';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Amazon = {};
  Tesla = {};
  stockToBuy = "";

  constructor(private dataService: StocksService)
  {

  }

  ngOnInit() {
    this.Tesla = this.dataService.Tesla;
    this.Amazon= this.dataService.Amazon;
    this.stockToBuy = this.dataService.stockToBuy();
  }
}
