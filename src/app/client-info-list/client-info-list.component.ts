import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-client-info-list',
  templateUrl: './client-info-list.component.html',
  styleUrls: ['./client-info-list.component.css']
})
export class ClientInfoListComponent implements OnInit {

//  Take in display array, 
//  output selected item from the list.

 @Input() clientInfoArray : Array<Object> = [];
//  @Output() selectedItem: EventEmitter<string> = new EventEmitter();

// (click)="displayItem(item)"

// @Output() selectedItem: EventEmitter<string> = new EventEmitter();

 @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // displayItem(item) {
  //   console.log(item);
  //   this.selectedItem.emit(item);
  // }

}
