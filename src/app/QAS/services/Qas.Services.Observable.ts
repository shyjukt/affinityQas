
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import * as AppUtils from 'app/common/app.utils';
	
	
import { QaPersonalMast } from 'app/QAS/resources/QaPersonalMast.resource'
import { QaEventUsers } from 'app/QAS/resources/QaEventUsers.resource'
import { QaEventDefaultUsers } from 'app/QAS/resources/QaEventDefaultUsers.resource'
import { QaEventLocationUsers } from 'app/QAS/resources/QaEventLocationUsers.resource'
import { QaEventDepartmentMast } from 'app/QAS/resources/QaEventDepartmentMast.resource'
import { QaEventUsersVew } from 'app/QAS/resources/QaEventUsersVew.resource'
import { QaEventsColl } from 'app/QAS/resources/QaEventsColl.resource'
import { QaSubCategoryMast } from 'app/QAS/resources/QaSubCategoryMast.resource'
import { QaEventSearchCriteria } from 'app/QAS/resources/QaEventSearchCriteria.resource'
import { QaEventsCollVew } from 'app/QAS/resources/QaEventsCollVew.resource'
import { QaEventLocationMast } from 'app/QAS/resources/QaEventLocationMast.resource'
import { QaCategoryMast } from 'app/QAS/resources/QaCategoryMast.resource'

@Injectable()
 
 export class QASServicesObservable  {

	private AFFINITY_URL_BASE= AppUtils.BACKEND_API_URL ;
  public headerData;
  
	constructor(private http: Http) { }

	private handleError(error: any): Promise<any> {
	 console.error('Could not complete requested service operation', error);
	 return Promise.reject(error.message || error);
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
  public listQaEventLocationUsersObservable(qaeventlocationusers : QaEventLocationUsers) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData})
        .map(data => {
            data.json();
            return data.json();
    });
} 

public createQaEventLocationUsersObservable( qaeventlocationusers : QaEventLocationUsers) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData} )
    .map(data => {
        data.json();
        return data.json();
   });
  } 
    public editQaEventLocationUsersObservable( qaeventlocationusers : QaEventLocationUsers){
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData} )
    .map(data => {
        data.json();
        return data.json();
   });
  }      
 
public listQaLocationsObservable( ) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.get(`${this.AFFINITY_URL_BASE}listQaLocations` ,  {headers: this.headerData})
    .map(data => {
        data.json();
        return data.json();
});
  }      
  public listQaPersonalMastObservable() {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));

    return this.http.get(`${this.AFFINITY_URL_BASE}listQaPersonalMast`, {headers: this.headerData})
        .map(data => {
            data.json();
            return data.json();
    });
}

  public listQaCategoryMastObservable(qacategorymast : QaCategoryMast) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));

    return this.http.post(`${this.AFFINITY_URL_BASE}listQaCategoryMast` , qacategorymast, {headers: this.headerData})
        .map(data => {
            data.json();
            return data.json();
    });
}

  public listQaEventDefaultUsersObservable(qaeventdefaultusers : QaEventDefaultUsers) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));

    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEventDefaultUsers` , qaeventdefaultusers, {headers: this.headerData})
        .map(data => {
            data.json();
            return data.json();
    });
}

 public getlistQaEventObservable(qaeventlocationusers : QaEventLocationUsers) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));

    return this.http.post(`${this.AFFINITY_URL_BASE}listQaEventLocationUsers` , qaeventlocationusers, {headers: this.headerData})
        .map(data => {
            data.json();
            return data.json();
    });
} 

public createQaEventDefaultUsersObservable(qaeventdefaultusers : QaEventDefaultUsers) {
  this.headerData = new Headers();
  this.headerData.append('Content-Type', 'application/json');
  this.headerData.append('Authorization', localStorage.getItem("access-token"));

  return this.http.post(`${this.AFFINITY_URL_BASE}createQaEventDefaultUsers` , qaeventdefaultusers, {headers: this.headerData})
      .map(data => {
          data.json();
          return data.json();
  });
} 

public editQaEventDefaultUsersObservable(qaeventdefaultusers : QaEventDefaultUsers) {
  this.headerData = new Headers();
  this.headerData.append('Content-Type', 'application/json');
  this.headerData.append('Authorization', localStorage.getItem("access-token"));

  return this.http.post(`${this.AFFINITY_URL_BASE}editQaEventDefaultUsers` , qaeventdefaultusers, {headers: this.headerData})
      .map(data => {
          data.json();
          return data.json();
  });
} 
public listQaSubCategoryMastObservable( qasubcategorymast : QaSubCategoryMast) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.post(`${this.AFFINITY_URL_BASE}listQaSubCategoryMast` , qasubcategorymast, {headers: this.headerData} )
    .map(data => {
        data.json();
        return data.json();
});
  } 
  public createQaSubCategoryMastObservable( qasubcategorymast : QaSubCategoryMast){
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
     return this.http.post(`${this.AFFINITY_URL_BASE}createQaSubCategoryMast` , qasubcategorymast, {headers: this.headerData} )
    .map(data => {
        data.json();
        return data.json();
});
  }      
  public editQaSubCategoryMastObservable( qasubcategorymast : QaSubCategoryMast){
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}editQaSubCategoryMast` , qasubcategorymast, {headers: this.headerData} )
    .map(data => {
        data.json();
        return data.json();
});
  }      
    
  public getQaSubCategoryMastObservable( subCatCode : number)  {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaSubCategoryMast?subCatCode=${subCatCode} ` ,  {headers: this.headerData} )
    .map(data => {
        data.json();
        return data.json();
});
  }    
  
  public createQaCategoryMastObservable( qacategorymast : QaCategoryMast) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaCategoryMast` , qacategorymast, {headers: this.headerData} )
 
    .map(data => 
        {
            data.json();
        return data.json();
        });
    }    
  
    public editQaCategoryMastObservable( qacategorymast : QaCategoryMast)  {
        this.headerData = new Headers();
        this.headerData.append('Content-Type', 'application/json');
        this.headerData.append('Authorization', localStorage.getItem("access-token"));
        
        return this.http.post(`${this.AFFINITY_URL_BASE}editQaCategoryMast` , qacategorymast, {headers: this.headerData} )
        .map (data =>{

         data.json();
        return data.json();
      });
}


public deleteQaCategoryMastObservable( categoryCode : number) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaCategoryMast?categoryCode=${categoryCode} ` ,  {headers: this.headerData} )
    .map (data =>{
        
                 data.json();
                return data.json();
              });
}

public deleteQaEventParametersObservable( eventParamId : number){
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.delete(`${this.AFFINITY_URL_BASE}deleteQaEventParameters?eventParamId=${eventParamId} ` ,  {headers: this.headerData} )
    .map (data =>{
        
        data.json();
       return data.json();
     });
  }      
  

public createQaEventObservable( qaeventscoll : QaEventsColl)  {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.post(`${this.AFFINITY_URL_BASE}createQaEvent` , qaeventscoll, {headers: this.headerData} )
    .map (data =>{
        
        data.json();
       return data.json();
     });
  }      
  
  public approveQaEventObservable( eventId : number)  {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}approveQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .map (data =>{
        
        data.json();
       return data.json();
     });
  }      
  
  public getQaEventObservable( eventId : number) {
    this.headerData = new Headers();
    this.headerData.append('Content-Type', 'application/json');
    this.headerData.append('Authorization', localStorage.getItem("access-token"));
    
    return this.http.get(`${this.AFFINITY_URL_BASE}getQaEvent?eventId=${eventId} ` ,  {headers: this.headerData} )
    .map (data =>{
        
        data.json();
       return data.json();
     });
  }    


 }
