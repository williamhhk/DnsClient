import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store'
import {IncrementAction} from '../actions/actions'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    counter$: Observable<number>;

    constructor(
        private store : Store<number>
    ){
        this.counter$ = this.store.select('counter2')
        
    }

    increment(){
//        this.store.dispatch({type: 'INCREMENT'});
        this.store.dispatch({
          type: 'INCREMENT',
          offset: 2} as IncrementAction);
    }

    decrement(){
//        this.store.dispatch({type: 'DECREMENT'});
        this.store.dispatch({
          type: 'DECREMENT',
          offset: 2} as IncrementAction);        
    }

  ngOnInit() {
  }

}
