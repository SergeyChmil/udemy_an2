import {Component} from "@angular/core";
import {StockService} from "./stock.service";

@Component({
  selector: "stocks",
  template: `<h2>Stocks</h2>
        {{title}}

        <ul [ngStyle]="{'color':'red'}">
        <li *ngFor="let stock of stocks">
        {{stock}}
        </li>
        </ul>
        <hr>
        <ul *ngIf="stockMarkets.length > 0">
            <li *ngFor="let item of stockMarkets">{{item}}</li>
        </ul>
        <hr>
           <div [ngSwitch] = "market">
           <div *ngSwitchCase="'NYSE'"> New York Stock Exchange</div>
           <div *ngSwitchCase="'LSE'"> London Stock Exchange</div>
           <div *ngSwitchDefault> Could not find a match</div>
           
</div>`
})

export class StocksComponent {
  market:string = 'LSE';
  title = "List of stocks";
  stocks: string[];
  stockMarkets: string[] = ["NYSE", "NASDAQ", "EURONEXT", "HKSE"];

  constructor(stockService: StockService) {
    this.stocks = stockService.getStocks();
  }
}
