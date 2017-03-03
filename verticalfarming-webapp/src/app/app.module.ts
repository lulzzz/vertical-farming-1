import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { VFSearchComponent, VFSidenavComponent, VFToolbarComponent } from'./components';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    VFSidenavComponent,
    VFToolbarComponent,
    // VFSearchComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
