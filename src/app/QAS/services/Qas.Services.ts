
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import * as AppUtils from 'app/common/app.utils';
	
	
import { QaPersonalMast } from '../resources/QaPersonalMast.resource'
import { QaEventUsers } from '../resources/QaEventUsers.resource'
import { QaEventDefaultUsers } from '../resources/QaEventDefaultUsers.resource'
import { QaEventLocationUsers } from '../resources/QaEventLocationUsers.resource'
import { QaEventWitnessesVew } from '../resources/QaEventWitnessesVew.resource'
import { QaEventMessages } from '../resources/QaEventMessages.resource'
import { QaEventDepartmentMast } from '../resources/QaEventDepartmentMast.resource'
import { QaEventMessagesVew } from '../resources/QaEventMessagesVew.resource'
import { QaEventWitnesses } from '../resources/QaEventWitnesses.resource'
import { QaEventUsersVew } from '../resources/QaEventUsersVew.resource'
import { QaEventsColl } from '../resources/QaEventsColl.resource'
import { QaSubCategoryMast } from '../resources/QaSubCategoryMast.resource'
import { QaEvents } from '../resources/QaEvents.resource'
import { QaEventSearchCriteria } from '../resources/QaEventSearchCriteria.resource'
import { QaEventsCollVew } from '../resources/QaEventsCollVew.resource'
import { QaEventParameters } from '../resources/QaEventParameters.resource'
import { QaEventLocationMast } from '../resources/QaEventLocationMast.resource'
import { QaCategoryMast } from '../resources/QaCategoryMast.resource'

@Injectable()
 
 export class QASServices  {
	
	private AFFINITY_URL_BASE= AppUtils.BACKEND_API_URL ;

	public headerData;
	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
	 console.error('Could not complete requested service operation', error);
	 return Promise.reject(error.message || error);
	}
	
public deleteQaEventLocationUsers( runId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaEventLocationUsers?runId=${runId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteQaEventDefaultUsers( runId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaEventDefaultUsers?runId=${runId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteQaEventWitnesses( witnessId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaEventWitnesses?witnessId=${witnessId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteQaEventParameters( eventParamId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaEventParameters?eventParamId=${eventParamId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteQaEventUser( eventUserId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaEventUser?eventUserId=${eventUserId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteQaCategoryMast( categoryCode : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaCategoryMast?categoryCode=${categoryCode} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public deleteQaSubCategoryMast( subCatCode : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaSubCategoryMast?subCatCode=${subCatCode} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaCategoryMast( categoryCode : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaCategoryMast?categoryCode=${categoryCode} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaEventUsersVew( eventId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listQaEventUsersVew?eventId=${eventId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaEvent( eventId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public reOpenQaEvent( eventId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}reOpenQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public closeQaEvent( eventId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}closeQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public cancelQaEvent( eventId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}cancelQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public approveQaEvent( eventId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}approveQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaSubCategoryMast( subCatCode : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaSubCategoryMast?subCatCode=${subCatCode} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaEventLocationUsers( runId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEventLocationUsers?runId=${runId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaEventWitnesses( witnessId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEventWitnesses?witnessId=${witnessId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaEventWitnesses( witnessId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listQaEventWitnesses?witnessId=${witnessId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaEventUser( eventUserId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEventUser?eventUserId=${eventUserId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaEventDefaultUsers( runId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEventDefaultUsers?runId=${runId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public getQaEventParameters( eventParamId : number) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEventParameters?eventParamId=${eventParamId} ` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaPersonalMast( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listQaPersonalMast` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaDepartments( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listQaDepartments` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaLocations( ) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}listQaLocations` ,  {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaCategoryMast( qacategorymast : QaCategoryMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaCategoryMast` , qacategorymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaCategoryMast( qacategorymast : QaCategoryMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaCategoryMast` , qacategorymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaCategoryMast( qacategorymast : QaCategoryMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaCategoryMast` , qacategorymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventDescription( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventDescription` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventComment( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventComment` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventConsequences( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventConsequences` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventAction( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventAction` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventRecommendation( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventRecommendation` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventComment( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventComment` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventConsequences( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventConsequences` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventAction( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventAction` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventRecommendation( qaeventmessages : QaEventMessages) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventRecommendation` , qaeventmessages, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventWitnesses( qaeventwitnesses : QaEventWitnesses) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventWitnesses` , qaeventwitnesses, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventWitnesses( qaeventwitnesses : QaEventWitnesses) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventWitnesses` , qaeventwitnesses, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaSubCategoryMast( qasubcategorymast : QaSubCategoryMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaSubCategoryMast` , qasubcategorymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaSubCategoryMast( qasubcategorymast : QaSubCategoryMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaSubCategoryMast` , qasubcategorymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaSubCategoryMast( qasubcategorymast : QaSubCategoryMast) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaSubCategoryMast` , qasubcategorymast, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventLocationUsers( qaeventlocationusers : QaEventLocationUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventLocationUsers( qaeventlocationusers : QaEventLocationUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaEventLocationUsers( qaeventlocationusers : QaEventLocationUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventUser( qaeventusers : QaEventUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventUser` , qaeventusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventUser( qaeventusers : QaEventUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventUser` , qaeventusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaEvents( qaeventsearchcriteria : QaEventSearchCriteria) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEvents` , qaeventsearchcriteria, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventDefaultUsers( qaeventdefaultusers : QaEventDefaultUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventDefaultUsers` , qaeventdefaultusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventDefaultUsers( qaeventdefaultusers : QaEventDefaultUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventDefaultUsers` , qaeventdefaultusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaEventDefaultUsers( qaeventdefaultusers : QaEventDefaultUsers) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEventDefaultUsers` , qaeventdefaultusers, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventParameters( qaeventparameters : QaEventParameters) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventParameters` , qaeventparameters, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEventParameters( qaeventparameters : QaEventParameters) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventParameters` , qaeventparameters, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public listQaEventParameters( qaeventparameters : QaEventParameters) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEventParameters` , qaeventparameters, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public editQaEventHdr( qaevents : QaEvents) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventHdr` , qaevents, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

public createQaEvent( qaeventscoll : QaEventsColl) : Promise<any> {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEvent` , qaeventscoll, {headers: this.headerData} )
    .toPromise()
    .then (response => response.json())
    .catch(this.handleError);
  }      
  

 
}

  
