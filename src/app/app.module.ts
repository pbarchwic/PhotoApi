import { HttpClientModule } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Components from './component';
import * as Repository from './repository';

@NgModule({
  declarations: [AppComponent, Components.PhotoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [Repository.PhotoRepository],
  bootstrap: [AppComponent],
})
export class AppModule {}
