
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import * as AppUtils from '../common/app.utils';	

import { ReqRequestType } from '../resources/ReqRequestType.resource'


@Injectable()
 
 export class IREQServices  {
	
	private AFFINITY_URL_BASE= AppUtils.BACKEND_API_URL ;

	public headerData;
	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
	 console.error('Could not complete requested service operation', error);
	 return Promise.reject(error.message || error);
	}
	
public getReqRequestState( stateId : string) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getReqRequestState?stateId=${stateId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getReqRequestType( typeId : string) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getReqRequestType?typeId=${typeId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteReqRequestType( typeId : string) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteReqRequestType?typeId=${typeId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createReqRequestType( reqrequesttype : ReqRequestType) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createReqRequestType` , reqrequesttype, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editReqRequestType( reqrequesttype : ReqRequestType) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editReqRequestType` , reqrequesttype, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listReqRequestState( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listReqRequestState` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listReqRequestTypes( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listReqRequestTypes` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

 
}

  
