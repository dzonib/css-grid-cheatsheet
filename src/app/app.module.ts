import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Grid1Component } from './grid/grid1/grid1.component';
import { Grid2Component } from './grid/grid2/grid2.component';

@NgModule({
  declarations: [
    AppComponent,
    Grid1Component,
    Grid2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
