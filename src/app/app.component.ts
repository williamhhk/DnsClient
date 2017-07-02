import { Component } from '@angular/core';
import { DnsClientService } from './dns-client.service'
import { Store } from '@ngrx/store'
import { go } from '@ngrx/router-store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor  (private store : Store<any>)
  {
  }

  ngOnInit () {
  }

  link(url) {
    const action = go(url);
    this.store.dispatch(action);
  }
}
