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

@NgModule({
  declarations: [
    AppComponent,
    VFSearchComponent,
    VFAccordian,
    RackDetail
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
