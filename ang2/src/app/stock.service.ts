import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import * as http from "selenium-webdriver/http";

@Injectable()

export class StockService {
  localURL:string = "http://localhost:3000/stocks/";

  constructor(private http: Http) {
  };

  getStocksAPI(): Observable<any> {
    return this.http.get(this.localURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || "getStocksAPI says: error"));
  };

  createStock(newStockCode: string, newName: string): Observable<any> {
    return this.http.post(this.localURL, {name: newName, stockCode: newStockCode});
  };

  updateStock(stockId:string, newStockCode:string, newName:string):Observable<any>{
    return this.http.put(this.localURL + stockId,
      {
        name:newName,
        stockCode:newStockCode
      });
  };

  deleteStock(stockId:string):Observable<any>{
    return this.http.delete(this.localURL + stockId);
  }

  getStocks(): string[] {
    return ["AAPL", "IBM", "GOOG", "UBER", "difhvidb"];
  };
};
