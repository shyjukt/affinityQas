import { QASServices } from 'app/services/index';
import { myService,ErpServices} from 'app/services/index';
import { QaEventLocationMast } from '../resources/QaEventLocationMast.resource'
import { QaPersonalMast } from '../resources/QaPersonalMast.resource'
import { QaSubCategoryMast } from '../resources/QaSubCategoryMast.resource'
import { QaEventsColl } from '../resources/QaEventsColl.resource'
import { QaEventUsersVew } from '../resources/QaEventUsersVew.resource'
import { QaEventDepartmentMast } from '../resources/QaEventDepartmentMast.resource'
import { QaEventsCollVew } from '../resources/QaEventsCollVew.resource'
import { QaCategoryMast } from '../resources/QaCategoryMast.resource'
import { Component, OnInit, ViewChild, AfterViewInit,Input,Output } from '@angular/core';
import { QaEventMessages } from 'app/QAS/resources/QaEventMessages.resource';
import { QaEventParameters } from 'app/QAS/resources/QaEventParameters.resource';
import { QaEventParametersVew } from 'app/QAS/resources/QaEventParametersVew.resource';
import { QaEvents } from 'app/QAS/resources/QaEvents.resource';

import { DatePipe } from '@angular/common';
import { QaEventWitnesses } from 'app/QAS/resources/QaEventWitnesses.resource';
import { QaParameterMast } from 'app/QAS/resources/QaParameterMast.resource';
import { QaEventUsers } from 'app/QAS/resources/QaEventUsers.resource';
import { QASServicesObservable } from 'app/services/index';

import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { isNull, isNumber } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs/Observable';
import { QaEventDefaultUsers } from 'app/QAS/resources/QaEventDefaultUsers.resource';
import { QaEventSearchCriteria } from 'app/QAS/resources/QaEventSearchCriteria.resource';
import { QaEventListComponent } from '../qa-event-list/qa-event-list.component';
import { isNumeric } from '@angular/common/src/pipes/number_pipe';
import { _PersInfo } from '../../resources/_PersInfo.resource';



@Component({
  selector: 'app-qa-new-event',
  templateUrl: './qa-new-event.component.html',
  providers: [QaEventListComponent]
  , styleUrls: ['./app-qa-new-event.component.css']
})
export class QaNewEventComponent implements OnInit {
  private msgFilter:any; 
  private parmFilter:any; 
  private persFilter :any;
  selectedRow: any;
  private userNew;

  public myForm: FormGroup;
  public myFormwitness: FormGroup;
  private tempevent: QaEventsColl;
  public eventId;
  newevent: QaEventsCollVew = new QaEventsCollVew();
  qaEventHdr :QaEvents =new QaEvents();
  public incidentMessage;
  public buttonEnableDisable;
  private eventTime;
  public processcreateQaEventUser:boolean;
  public processdeleteQaEventUser:boolean;
  public processcreateQaEventWitnesses:boolean;

  persInfo:_PersInfo = new _PersInfo();
  persColl: QaPersonalMast[] = [];
  categoryColl: QaCategoryMast[] = [];
  categoryItem: QaCategoryMast = new QaCategoryMast();
  subcategoryColl: QaSubCategoryMast[] = [];
  subcategoryItem: QaSubCategoryMast = new QaSubCategoryMast();
  locationColl: QaEventLocationMast[] = [];
  departmentColl: QaEventDepartmentMast[] = [];
  messageItem: QaEventMessages = new QaEventMessages();
  paramItem: QaEventParameters = new QaEventParameters();
  witnessItem: QaEventWitnesses = new QaEventWitnesses();
  witItem: QaEventWitnesses = new QaEventWitnesses();
  userItem: QaEventUsers = new QaEventUsers();
  moreuserItem: QaEventUsers = new QaEventUsers();

  eventUser: QaEventDefaultUsers = new QaEventDefaultUsers();
  eventUsercoll: QaEventDefaultUsers[] = [];
  public filterResult:any;
  public entryBy;
  private row = [];
  emitEvent :any[];
  @Input()
  eventDetails: any;

  data: Observable<Array<any>>;

   ngOnInit() {
 
      this.incidentMessage = true;
      this.enableDisable();
      this.newevent.qaEventMessagesVew = new Array();
      this.newevent.qaEventWitnessesVew = new Array();
      this.newevent.qaEventParametersVew = new Array();
      this.newevent.qaEventUsersVew = new Array();
      this.doInit();
    
  }
 


  doInit() {
    this.retrieve();
  }

  constructor(private qasservices: QASServices, private _service: ErpServices,private _QASServicesObservable: QASServicesObservable
    , private _fb: FormBuilder, public datepipe: DatePipe, private _eServices: myService) { }

  private retrieve() {

    this.qasservices.listQaCategoryMast(this.categoryItem)
      .then(data => this.categoryColl = data);

      this.qasservices.listQaSubCategoryMast(this.subcategoryItem)
      .then(data => this.subcategoryColl = data);


    this.qasservices.listQaLocations()
      .then(data => this.locationColl = data);

    this.qasservices.listQaDepartments()
      .then(data => this.departmentColl = data);

    this.qasservices.listQaPersonalMast()
      .then(data => this.persColl = data);

  }

  saveInfo() {

    this.tempevent = new QaEventsColl();
    this.tempevent.qaEventMessages = new Array();
    this.tempevent.qaEventWitnesses = new Array();
    this.tempevent.qaEventParameters = new Array();
    this.tempevent.qaEventUsers = new Array();
    
    this.tempevent.eventCategory = this.newevent.eventCategory;
    this.tempevent.eventSubCategory = this.newevent.eventSubCategory;
    this.tempevent.eventLocation = this.newevent.eventLocation;
    this.tempevent.eventDept = this.newevent.eventDept;
    this.tempevent.eventTime = this.newevent.eventTime;
    this.tempevent.eventId=this.newevent.eventId;

    if (isNaN(this.newevent.eventId)) {
      this.tempevent.eventStatus = 0;
      if (this.messageItem.msgDesc != undefined) {
        
        this.messageItem.msgType = "I";
       
       this.tempevent.qaEventMessages.push(this.messageItem);
      }

      if ( this.paramItem.paramValue != undefined) {
        this.paramItem.paramId=1
        this.tempevent.qaEventParameters.push(this.paramItem);
      }



      console.log(this.tempevent)
      this._QASServicesObservable.createQaEventObservable(this.tempevent)
        .subscribe(response => {
          this.newevent = response;
          this.data = response;
          this.incidentMessage = false;
         this.eventTime=this.datepipe.transform(this.newevent.eventTime, 'yyyy-MM-dd');
         this.newevent.eventTime=this.eventTime;
          var alertify = require('alertifyjs');
          alertify.success('Incident Saved Successfully');
          console.log(this.newevent);
          this.persColl.forEach(element => {
            if (this.newevent.createdBy == element.persCode) {
              this.entryBy = 'Created By' + element.printName + 'On'
            }

          });

        },
        error => {
          //console.log(error.text());
        });
        
    }
 

  }

  approveEvent() {
    this._QASServicesObservable.approveQaEventObservable(this.newevent.eventId)
      .subscribe((response) => {
        this.newevent = response;
        this.data = response;
        this.enableDisable();
        this.eventTime=this.datepipe.transform(this.newevent.eventTime, 'yyyy-MM-dd');
         this.newevent.eventTime=this.eventTime;
        var alertify = require('alertifyjs');
          alertify.success('Incident Approved Successfully');
      });
  };
  enableDisable(){
    this.processcreateQaEventUser=this._service._checkProcessExist("createQaEventUser");
    this.processdeleteQaEventUser=this._service._checkProcessExist("deleteQaEventUser");
    this.processcreateQaEventWitnesses=this._service._checkProcessExist("createQaEventWitnesses");
    
    if(this.newevent.eventStatus==1){
      return this.buttonEnableDisable=false;
    }else{
      return this.buttonEnableDisable=true;
    }
  }
 
  selectedWitness(dep)
  {
    this.witnessItem=dep;
    this.selectedRow =dep;
    console.log(this.witnessItem);

  }
  createWitness()
  {
    if(this.newevent.eventId !=undefined ){
    this.witItem.eventId=this.newevent.eventId;
    
    this.qasservices.createQaEventWitnesses(this.witItem)
    .then
   ((response) => 
  {
    this.refreshEvent();
    alert('The witness details added for the Event :  ' +this.witItem.eventId+ ' successfully');
    this.witItem=new QaEventWitnesses();
  });
  }
  
  }

  editWitness()
  {
   
    if(this.newevent.eventId !=undefined ){
      console.log(this.witnessItem);
      
    this.qasservices.editQaEventWitnesses(this.witnessItem)
    .then
   
  ((response) => 
  {
    alert('The witness details updated for the Event :  ' +this.witnessItem.eventId+ ' successfully');
    
    this.refreshEvent();
  });
    }
  }
    deleteWitness()
   {  
     console.log(this.witnessItem.witnessId);
    this.qasservices.deleteQaEventWitnesses(this.witnessItem.witnessId)
    .then
     
     
  ((response) => 
  {
    this.refreshEvent();
    alert('The witness details deleted currosponds to  :  ' +this.witnessItem.eventId+ ' successfully');
  });
    }    
  
    editMessage()
    {  if(this.newevent.eventId !=undefined)
      { 
        this.msgFilter= this.newevent.qaEventMessagesVew.find(item => item.msgType=== 'I');
         this.messageItem.entryTime=this.msgFilter.entryTime;
        this.messageItem.entryUser=this.msgFilter.entryUser;
        this.messageItem.eventId=this.msgFilter.eventId;
        this.messageItem.messageId=this.msgFilter.messageId;
        this.messageItem.msgType="I";
        
       console.log(this.messageItem);
        this.qasservices.editQaEventDescription(this.messageItem)
      .then
      
       ((response) => 
       {
        alert('The Incident details updated for the event :  ' +this.messageItem.eventId+ ' successfully');
         this.refreshEvent();
       });
      }
    }
  editParameters()
  {  if(this.newevent.eventId !=undefined)
    { 
      this.parmFilter=this.newevent.qaEventParametersVew.find(item=>item.eventId===this.newevent.eventId)
      this.paramItem.eventParamId=this.parmFilter.eventParamId;
      this.paramItem.eventId=this.parmFilter.eventId;
      this.paramItem.paramId=this.parmFilter.paramId;
      
      console.log(this.paramItem);
    this.qasservices.editQaEventParameters(this.paramItem)
    .then
     
    
     ((response) => 
     {
      alert('The parameter info updated for the event :  ' +this.paramItem.eventId+ ' successfully');
       this.refreshEvent();
     });
    }
}
  createParameters()
  { if(this.newevent.eventId !=undefined )
    { 
      this.paramItem.eventId=this.newevent.eventId
      console.log(this.paramItem.eventId)
      this.paramItem.paramId=1
      console.log(this.paramItem);
      this.qasservices.createQaEventParameters(this.paramItem)
    .then
       
  ((response) => 
  {
    alert('The parameter info updated for the event :  ' +this.paramItem.eventId+ ' successfully');
    this.refreshEvent();
  }); 
    }
}
deleteParameter(){
  if(this.newevent.eventId !=undefined )
    {
      this.parmFilter=this.newevent.qaEventParametersVew.find(item=>item.eventId===this.newevent.eventId)
  this.paramItem.eventParamId=this.parmFilter.eventParamId;
  this.paramItem.eventId=this.parmFilter.eventId;
  this.paramItem.paramId=this.parmFilter.paramId;
  this.paramItem.paramValue=this.parmFilter.paramValue; 
  console.log(this.paramItem.eventParamId);
  
  this.qasservices.deleteQaEventParameters(this.paramItem.eventParamId)
  .then

 ((response) => 
  {
    alert('Patient No :'+ this.paramItem.paramValue+ 'deleted sucessfully');
    this.refreshEvent();
   
    this.paramItem=new QaEventParameters();
  });
  
    }

}
selectedUser(user) {
  this.userItem = user;

  this.selectedRow = user;
  console.log(this.userItem)
};
deleteUser() {
  this.persColl.forEach(element => {
    if (this.userItem.persCode == element.persCode) {
      this.userNew = element.printName
    }

  });
  if(this._service.persInfo.persCode==this.userItem.addedBy){
  if(confirm("Are you sure to delete "+ this.userNew+ " from this event ?")) {
  this.qasservices.deleteQaEventUser(this.userItem.eventUserId)
  .then
  ((response) => 
  {
    alert('The User is deleted for the Event : '+this.newevent.eventId+ ' successfully');
    this.refreshEvent();
  });
  }}
  else{
    alert(this._service.persInfo.printName +'has no privilage to delete this user');
  }
 

   
}
createmoreUser(){
  if(this.newevent.eventId !=undefined ){

  this.moreuserItem.eventId = this.newevent.eventId;
  this.moreuserItem.userType = "D";
  this.moreuserItem.accessType = 0;
  console.log(this.userItem);
  this.qasservices.createQaEventUser(this.moreuserItem)
  .then
  
  ((response) => 
  {
    this.refreshEvent();
    alert('The User is added for the Event : '+this.moreuserItem.eventId+ ' successfully');
    this.moreuserItem=new QaEventUsers();
  }); 

}
}

refreshEvent(){
  if(this.newevent.eventId !=undefined ){
    this.qasservices.getQaEvent(this.newevent.eventId)
    .then(response => {
      this.newevent = response;
      this.eventTime=this.datepipe.transform(this.newevent.eventTime, 'yyyy-MM-dd');
      this.newevent.eventTime=this.eventTime;
      console.log(this.newevent);

        });
  }
}
  editHdr()
  {
    if(this.newevent.eventId !=undefined ){
    this.qaEventHdr.createdBy=this.newevent.createdBy;
    this.qaEventHdr.createdTime=this.newevent.createdTime;
    this.qaEventHdr.eventCategory=this.newevent.eventCategory;
    this.qaEventHdr.eventDept=this.newevent.eventDept;
    this.qaEventHdr.eventId=this.newevent.eventId;
    this.qaEventHdr.eventLocation=this.newevent.eventLocation;
    this.qaEventHdr.eventNo=this.newevent.eventNo;
    this.qaEventHdr.eventStatus=this.newevent.eventStatus;
    this.qaEventHdr.eventSubCategory=this.newevent.eventSubCategory;
    this.qaEventHdr.eventTime=this.newevent.eventTime;
    console.log(this.qaEventHdr);
    this.qasservices.editQaEventHdr(this.qaEventHdr)
    .then
     alert('The Event HDR info for the event :  ' +this.qaEventHdr.eventId+ ' updated successfully'); 
     
     ((response) => 
     {
       this.refreshEvent();
     });
    }
    }
   
    clearModel() {
      //this.buttonEnableDisable=true;
    this.incidentMessage = true;
    this.newevent = new QaEventsCollVew();
    this.messageItem = new QaEventMessages();
    this.paramItem = new QaEventParameters();
    this.witnessItem=new QaEventWitnesses();
    
    this.entryBy=null;
    this.data=null;
    this.enableDisable();
   

  
      
  };

  firstDropDownChanged(val: any) {
    const obj = this.categoryColl[val];
    console.log(val, obj);
    if (!obj) return;
    this.filterResult = this.subcategoryColl.filter((item: QaSubCategoryMast) => item.categoryCode === obj.categoryCode);
    console.log(this.filterResult);

  }

   



}
