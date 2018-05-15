import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import * as AppUtils from '../common/app.utils';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { _PersInfo } from '../resources/_PersInfo.resource';
import { _PersProcess } from '../resources/_PersProcess.resource';

@Injectable()
export class ErpServices {

  public persInfo:_PersInfo;
  public processInfo:any;
  public Process:boolean=false;

  public headerData;
  constructor(private http: Http) { }

  getMenu(): Observable<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.get(AppUtils.MENU_URL, { headers: this.headerData })
      .map(response => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error.json());
      });
  }
  
  getSessionProcesses(): Observable<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.get(AppUtils.LIST_SESSION_PROCESSES, { headers: this.headerData })
      .map(response => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error.json());
      });
  }
  
  getSessionPerson(): Observable<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.get(AppUtils.SESSION_PERSON, { headers: this.headerData })
      .map(response => response.json())
      .catch(error => {
        console.log(error);
        return Observable.throw(error.json());
      });
  }
  
  doLogin(body) {  
	return this.http.post(AppUtils.AUTHENTICATION_URL, body, { headers: AppUtils.contentHeaders })
	.map((response: Response) => response.json())
	.catch(error => {
		console.log(error);
	return Observable.throw(error.json());
	});
  }


  _checkProcessExist(response):any {

  
  if (this.processInfo == undefined) {
    this.processInfo = response;
  }
  else if (this.processInfo != undefined) {

    for (let m of this.processInfo) {
      if (m.processCode.split('_')[1] == response) {
        this.Process = true;
      }
    }

  }

  return this.Process;
}
  

    
       
}
