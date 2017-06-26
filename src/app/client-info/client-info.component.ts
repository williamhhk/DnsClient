import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  @Input() clientInfo2 : string ;

  constructor() { }

  ngOnInit() {
  }

}
