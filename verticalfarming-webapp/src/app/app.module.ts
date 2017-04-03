import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { VFSearchComponent, VFSidenavComponent, VFToolbarComponent, VFChartComponent} from'./components';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';
import {SearchService} from "./service/search/search.service";
import {PhService} from "./service/sensor/ph.service";


@NgModule({
  declarations: [
    AppComponent,
    VFSidenavComponent,
    VFToolbarComponent,
    VFChartComponent,
    VFSearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [SearchService, PhService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
