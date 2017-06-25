import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import {Headers, Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class DnsClientService {
  BASE_URL = 'http://localhost:59604';
  queryClient(hostName) {
    console.log("inside query client......");
    return "Hello.com";
  }

  taskEmitter : Observable<Response> = new Observable();

  constructor (private http : Http) {}

  addClient(hostname : string) {
    console.log(hostname);
  }

  get(hostName : string) {
    var result = this.http.get(`http://localhost:59604/api/dnsclient/{hostName}/a`)
    //.map(response => response.json())
    //  replace map with res.json()
  
    .subscribe((res) =>{
                          console.log(res.json());      
                          return res;                             
                      },
    (err)=>
    {
      console.log(err)
      return err;
    },
    ()=> {
      console.log("Done")
      return "done";
    }
    );
  }

  getAsync(hostName : string) {
    return this.http.get(`http://localhost:59604/api/dnsclient/${hostName}/a`);
  }


  put() {}
  post() {}
  delete() {}

}
