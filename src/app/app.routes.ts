import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component'
import { GenericInputComponent } from './generic-input/generic-input.component';
import { CounterComponent } from './counter/counter.component'


export const routeConfig: Routes = [
    { path: '', redirectTo: 'query', pathMatch:'full'}, 
    { path:'query', component: GenericInputComponent },
    { path:'about', component: AboutPageComponent },
    { path:'counter', component: CounterComponent },
];

