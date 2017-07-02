import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { DnsClientService } from './dns-client.service';

import { GenericInputComponent } from './generic-input/generic-input.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ClientInfoListComponent } from './client-info-list/client-info-list.component';
import { AboutPageComponent } from './about-page/about-page.component'
import { routeConfig } from './app.routes';

import { CounterComponent } from './counter/counter.component';
import { appStore } from './store';

import { RouterStoreModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    GenericInputComponent,
    ClientInfoComponent,
    ClientInfoListComponent,
    AboutPageComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    StoreModule.provideStore(appStore),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    RouterStoreModule.connectRouter()
  ],
  providers: [DnsClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
