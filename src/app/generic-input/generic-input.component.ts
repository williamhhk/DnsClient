import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DnsClientService } from '../dns-client.service'

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent implements OnInit {

  @Output() gihostName : EventEmitter<string> = new EventEmitter();
  clientInfo1 = new Object();
  constructor  (private dnsClientService : DnsClientService)
  {

  }  

  ngOnInit() {
  }

  queryHost(text: HTMLInputElement) {
    console.log(text.value);

    console.log("getIPByHostName");
    var value = this.dnsClientService.getAsync(text.value)
    .subscribe((res) =>{
                          this.clientInfo1=res.json().value;
                          console.log(this.clientInfo1);
                      },
    (err)=>
    {
      console.log(err)
      return err;
    }
    );   
  }

}
