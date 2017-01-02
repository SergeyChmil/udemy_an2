import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StocksComponent} from "./stocks.component";
import { HighlightDirective } from "./highlight.directives";
import {StockService} from "./stock.service";
import { DateFormatterPipe } from './date-formatter.pipe';
import {routing} from "./app.routing";
import { DashboardComponent } from './dashboard/dashboard.component';
import {CurrencyService} from "./currency.service";
import { BondsDirective } from './bonds.directive';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent, StocksComponent,
    HighlightDirective,
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
