import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';

import { DnsClientService } from './dns-client.service';

import { Routes } from '@angular/Router';
import { GenericInputComponent } from './generic-input/generic-input.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientInfoListComponent } from './client-info-list/client-info-list.component'

@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    ClientInfoComponent,
    ClientInfoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [DnsClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
