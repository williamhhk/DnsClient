import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {

  @Output() gihostName : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  queryHost(text: HTMLInputElement) {
    console.log(text.value);
    this.gihostName.emit(text.value);
  }

}
