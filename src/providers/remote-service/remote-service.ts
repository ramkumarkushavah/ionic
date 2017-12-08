import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { Subject } from "rxjs/Rx";



/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  sendData = new Subject();
  
  constructor(public http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getApiUrl: string = "https://jsonplaceholder.typicode.com/photos";

  getPosts() {

    return this.http.get(this.getApiUrl).subscribe(data=>{
    this.sendData.next(data);
      console.log(data)
    });


      // .map((res: Response) => {
      //   console.log(res)
      //   res})
      // .catch(error => Observable.of(`Bad Promise: ${error}`));
  

  }

}
