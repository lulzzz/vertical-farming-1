import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VFSearchComponent} from'./components';
import { AppComponent } from './app.component';
import {SearchService, PhService, TemperatureService} from "./service";
import {VFAccordian} from "./components/accordian/vf-accordian.component";
import {RackDetail} from "./components/rack-detail/rack-detail.component";
import {VFChart} from "./components/chart/vf-chart.component";
import { ChartModule } from 'angular2-highcharts';


@NgModule({
  declarations: [
    AppComponent,
    VFSearchComponent,
    VFAccordian,
    RackDetail,
    VFChart
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ChartModule.forRoot(require('highcharts')),
  ],
  providers: [SearchService, PhService, TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
