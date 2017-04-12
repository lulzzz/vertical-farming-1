import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VFSearchComponent, VFSidenavComponent, VFToolbarComponent, VFChartComponent} from'./components';
import { AppComponent } from './app.component';
import {SearchService, PhService, TemperatureService} from "./service";


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
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [SearchService, PhService, TemperatureService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
