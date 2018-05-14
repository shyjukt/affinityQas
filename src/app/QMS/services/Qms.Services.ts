
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import * as AppUtils from 'app/common/app.utils';
	
	
import { DsCounterTokenLink } from '../resources/DsCounterTokenLink.resource'
import { DsVewCounterTokenLink } from '../resources/DsVewCounterTokenLink.resource'
import { DsVewTokenSummary } from '../resources/DsVewTokenSummary.resource'
import { ParamTokenIdGroupId } from '../resources/ParamTokenIdGroupId.resource'
import { DsTokenStatus } from '../resources/DsTokenStatus.resource'
import { DsVewCounterTokenSummary } from '../resources/DsVewCounterTokenSummary.resource'
import { DsCounterGroup } from '../resources/DsCounterGroup.resource'
import { DsDisplayMast } from '../resources/DsDisplayMast.resource'
import { DsCounterMast } from '../resources/DsCounterMast.resource'
import { DsTokenColl } from '../resources/DsTokenColl.resource'
import { ParamTokenIdExtRefId } from '../resources/ParamTokenIdExtRefId.resource'
import { DsToken } from '../resources/DsToken.resource'
import { DsKioskSchedule } from '../resources/DsKioskSchedule.resource'
import { DsVewTokenDetail } from '../resources/DsVewTokenDetail.resource'
import { SearchDsToken } from '../resources/SearchDsToken.resource'

@Injectable()
 
 export class QMSServices  {
	
	private AFFINITY_URL_BASE= AppUtils.BACKEND_API_URL ;

	public headerData;
	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
	 console.error('Could not complete requested service operation', error);
	 return Promise.reject(error.message || error);
	}
	
public deleteDsCounterGroup( counterGroupId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteDsCounterGroup?counterGroupId=${counterGroupId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteDsCounterMast( counterId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteDsCounterMast?counterId=${counterId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteDsCounterTokenLink( linkId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteDsCounterTokenLink?linkId=${linkId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public remindDsToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}remindDsToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public cancelDsToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}cancelDsToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public unCancelDsToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}unCancelDsToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public holdWaitingToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}holdWaitingToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public unHoldWaitingToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}unHoldWaitingToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public reCallToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}reCallToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteDsKioskSchedule( scheduleId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteDsKioskSchedule?scheduleId=${scheduleId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteDsToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteDsToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteDsDisplayMast( displayId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteDsDisplayMast?displayId=${displayId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsDisplayMast( displayId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsDisplayMast?displayId=${displayId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsTokenColl( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsTokenColl?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsToken( tokenId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsToken?tokenId=${tokenId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsCounterMast( counterId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsCounterMast?counterId=${counterId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsCounterTokenLink( linkId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsCounterTokenLink?linkId=${linkId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsKioskSchedule( scheduleId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsKioskSchedule?scheduleId=${scheduleId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsCounterGroup( counterGroupId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsCounterGroup?counterGroupId=${counterGroupId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getDsCompanyName( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getDsCompanyName` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsDisplayMast( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsDisplayMast` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsTokenStatus( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsTokenStatus` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsTokenColl( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsTokenColl` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsToken( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsToken` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsCounterMast( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsCounterMast` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsCounterTokenLink( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsCounterTokenLink` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsKioskSchedule( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsKioskSchedule` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsCounterGroups( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listDsCounterGroups` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsDisplayMast( dsdisplaymast : DsDisplayMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsDisplayMast` , dsdisplaymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsDisplayMast( dsdisplaymast : DsDisplayMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsDisplayMast` , dsdisplaymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsVewCounterTokenSummary( searchdstoken : SearchDsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listDsVewCounterTokenSummary` , searchdstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsVewTokenDetail( searchdstoken : SearchDsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listDsVewTokenDetail` , searchdstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public searchDsTokens( searchdstoken : SearchDsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}searchDsTokens` , searchdstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsVewCounterTokenLink( searchdstoken : SearchDsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listDsVewCounterTokenLink` , searchdstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listDsVewTokenSummary( searchdstoken : SearchDsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listDsVewTokenSummary` , searchdstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsTokenColl( dstokencoll : DsTokenColl) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsTokenColl` , dstokencoll, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsTokenColl( dstokencoll : DsTokenColl) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsTokenColl` , dstokencoll, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsToken( dstoken : DsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsToken` , dstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsToken( dstoken : DsToken) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsToken` , dstoken, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsCounterMast( dscountermast : DsCounterMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsCounterMast` , dscountermast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsCounterMast( dscountermast : DsCounterMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsCounterMast` , dscountermast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public linkTokenExtRef( paramtokenidextrefid : ParamTokenIdExtRefId) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}linkTokenExtRef` , paramtokenidextrefid, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsCounterTokenLink( dscountertokenlink : DsCounterTokenLink) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsCounterTokenLink` , dscountertokenlink, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsCounterTokenLink( dscountertokenlink : DsCounterTokenLink) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsCounterTokenLink` , dscountertokenlink, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public changeTokenGroup( paramtokenidgroupid : ParamTokenIdGroupId) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}changeTokenGroup` , paramtokenidgroupid, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsKioskSchedule( dskioskschedule : DsKioskSchedule) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsKioskSchedule` , dskioskschedule, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsKioskSchedule( dskioskschedule : DsKioskSchedule) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsKioskSchedule` , dskioskschedule, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createDsCounterGroup( dscountergroup : DsCounterGroup) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createDsCounterGroup` , dscountergroup, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editDsCounterGroup( dscountergroup : DsCounterGroup) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editDsCounterGroup` , dscountergroup, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public searchDsCounterGroups( dscountergroup : DsCounterGroup) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}searchDsCounterGroups` , dscountergroup, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

 
}

  
