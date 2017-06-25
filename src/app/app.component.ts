import { Component } from '@angular/core';
import { DnsClientService } from './dns-client.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data;
  clientInfo = new Object();
  constructor  (private dnsClientService : DnsClientService)
  {

  }

  getIPByHostName(fullHostName : string)
  {
    console.log("getIPByHostName");
    var value = this.dnsClientService.getAsync(fullHostName)
    .subscribe((res) =>{
                          this.clientInfo=res.json().value;
                          console.log(this.clientInfo);
                      },
    (err)=>
    {
      console.log(err)
      return err;
    }
    );    
  }

  ngOnInit () {
    // console.log(this.dnsClientService.queryClient("my-pc"));
    // console.log(this.dnsClientService.get("test"));
    // var value = this.dnsClientService.getAsync("test")
    // .subscribe((res) =>{
    //                       console.log(res.json().value.IPAddress);    
    //                       console.log(res.json().value.HostName[0]);    
    //                   },
    // (err)=>
    // {
    //   console.log(err)
    //   return err;
    // }
    // );
  }
}
