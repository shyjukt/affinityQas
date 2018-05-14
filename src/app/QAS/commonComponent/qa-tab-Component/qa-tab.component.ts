import { QASServices } from 'app/services/index';
import { QASServicesObservable } from 'app/services/index';
import { QaEventsCollVew } from 'app/QAS/resources/QaEventsCollVew.resource'
import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { QaEventSearchCriteria } from 'app/QAS/resources/QaEventSearchCriteria.resource';
import { QaPersonalMast } from 'app/QAS/resources/QaPersonalMast.resource';
import { QaCategoryMast } from 'app/QAS/resources/QaCategoryMast.resource';
import { QaSubCategoryMast } from 'app/QAS/resources/QaSubCategoryMast.resource';
import { QaEventLocationMast } from 'app/QAS/resources/QaEventLocationMast.resource';
import { QaEventDepartmentMast } from 'app/QAS/resources/QaEventDepartmentMast.resource';
import { QaEventsColl } from 'app/QAS/resources/QaEventsColl.resource';
import { QaEventMessages } from 'app/QAS/resources/QaEventMessages.resource';
import { QaEventUsers } from 'app/QAS/resources/QaEventUsers.resource';
import { QaEventDefaultUsers } from 'app/QAS/resources/QaEventDefaultUsers.resource';
import { QaEventWitnesses } from '../../resources/QaEventWitnesses.resource';


@Component({
    selector: 'app-qa-tab',
    templateUrl: '../qa-tab-component/qa-tab.component.html',
    styleUrls: ['../qa-tab-component/qa-tab.component.css']
})

export class QaTabComponent implements OnInit, OnChanges {
    private User;
    private id;
    private filterResult: any;
    private msg = [];
    private user = [];
    private witness = [];
 
    selectedRow: Number;

    public  alertify= require('alertifyjs');

    @Input()
    eventDetails: any;

    ngOnInit() {
        this.doInit();
        
    }

     ngOnChanges() {
        if (this.eventDetails) {
            this.msg = this.eventDetails.qaEventMessagesVew;
            this.user = this.eventDetails.qaEventUsersVew;
            this.witness = this.eventDetails.qaEventWitnessesVew;
            this.id=this.eventDetails.eventId;
        }
    }
    refreshTab(){
     if(this.id!=undefined)
      this.qasservices.getQaEvent(this.id)
    .then (data=>this.eventDetails=data)
    this.msg = this.eventDetails.qaEventMessagesVew;
    this.user = this.eventDetails.qaEventUsersVew;
    this.witness = this.eventDetails.qaEventWitnessesVew;
    this.id=this.eventDetails.eventId;
    console.log(this.eventDetails)
}

    doInit() {
        this.qasservices.listQaPersonalMast()
            .then(data => this.persColl = data);
        
    }
    

    constructor(private qasservices: QASServices, private _QASServicesObservable: QASServicesObservable) {
    }
    eventItem: QaEventsCollVew = new QaEventsCollVew();
    messageItem: QaEventMessages = new QaEventMessages();
    
    subcategoryItem: QaSubCategoryMast = new QaSubCategoryMast();
    categoryItem: QaCategoryMast = new QaCategoryMast();
    searchModel: QaEventSearchCriteria = new QaEventSearchCriteria();
    witnessItem: QaEventWitnesses = new QaEventWitnesses();

    persColl: QaPersonalMast[] = [];
    categoryColl: QaCategoryMast[] = [];
    subcategoryColl: QaSubCategoryMast[] = [];
    locationColl: QaEventLocationMast[] = [];
    departmentColl: QaEventDepartmentMast[] = [];
    eventColl: QaEventsCollVew[] = [];
    userItem: QaEventUsers = new QaEventUsers();

      selectedMessage(item) {
        this.messageItem = item;
        this.selectedRow=item;
    };

    editDescription() {
        this.qasservices.editQaEventDescription(this.messageItem)
        .then
        alert('The message edited for Event : '+this.id+ ' successfully');
        this.refreshTab()
       this.messageItem=new QaEventMessages();

    }

    createAction() {
        this.messageItem.entryUser = 1;
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "A";
        this.qasservices.createQaEventAction(this.messageItem)
        .then
         alert('The action is created for Event : '+this.id+ ' successfully');
         this.refreshTab()
        this.messageItem=new QaEventMessages();
    }

    createConsequences() {
        this.messageItem.entryUser = 1;
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "C";
        this.qasservices.createQaEventConsequences(this.messageItem)
        .then
        alert('The consequences entered for Event : '+this.id+ ' successfully');
        this.refreshTab()
        this.messageItem=new QaEventMessages();
    }

    editConsequences() {
        this.qasservices.editQaEventConsequences(this.messageItem)
        .then
        alert('The consequences edited for Event : '+this.id+ ' successfully');
        this.refreshTab()
        this.messageItem=new QaEventMessages();

    }

    createComment() {
        this.messageItem.entryUser = 1;
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "S";
        console.log(this.messageItem);
        this.qasservices.createQaEventComment(this.messageItem)
        .then
        alert('The comment entered for Event : '+this.id+ ' successfully');
        this.refreshTab()
        this.messageItem= new QaEventMessages();
    }

    editComment() {
        this.qasservices.editQaEventComment(this.messageItem)
        .then
        alert('The comment edited for Event : '+this.id+ ' successfully');
        this.refreshTab()
        this.messageItem=new QaEventMessages();
    }

    createRecommendation() {
        this.messageItem.entryUser = 1;
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "R";
        this.qasservices.createQaEventRecommendation(this.messageItem)
        .then
        alert('The recommendations entered for Event : '+this.id+ ' successfully');
        this.refreshTab()
        this.messageItem=new QaEventMessages();
    } 

    editRecommendation() {
        this.qasservices.editQaEventRecommendation(this.messageItem)
        .then
        alert('The recommendations edited for Event : '+this.id+ ' successfully');
       // this.refreshTab()
        this.messageItem=new QaEventMessages();
    }

    selectedUser(obj) {
        this.userItem = obj;
        this.selectedRow=obj;
    };

    deleteUser() {
        this.persColl.forEach(element => {
            if (this.userItem.persCode == element.persCode) {
              this.User = element.printName
            }

          });
       if(confirm("Are you sure to delete  "+ this.User+ " from this event ?")) {
            this.qasservices.deleteQaEventUser(this.userItem.eventUserId).
            then 
         alert('The User is deleted for the Event : '+this.id+ ' successfully');
         this.refreshTab()
    }
      
    }
  
    editUser() {
        this.qasservices.editQaEventUser(this.userItem)
        .then
        alert('The User is edited for the Event : '+this.id+ ' successfully');
        //this.refreshTab()
        this.userItem=new QaEventUsers();
    }

    createUser() {
        this.userItem.eventId = this.id
        this.userItem.userType = "D"
        this.userItem.accessType = 0
        this.qasservices.createQaEventUser(this.userItem)
        .then
        alert('The User is added for the Event : '+this.id+ ' successfully');
        this.refreshTab()
        this.userItem=new QaEventUsers();
    }

    selectedWitness(wit)
    {
      this.witnessItem=wit;
      this.selectedRow =wit;
      console.log(this.witnessItem);
  
    }
  
    editWitness()
    {
      this.qasservices.editQaEventWitnesses(this.witnessItem)
      .then
      alert('The witness details updated for the Event :  ' +this.witnessItem.eventId+ ' successfully');
      //this.refreshTab()
  
      
    }
      deleteWitness()
     {  
      this.qasservices.deleteQaEventWitnesses(this.witnessItem.witnessId)
      .then
       alert('The witness details deleted currosponds to  :  ' +this.witnessItem.witnessId+ ' successfully');
       this.refreshTab()
     }    
     createWitness()
     {
        this.witnessItem.eventId = this.id
        this.qasservices.createQaEventWitnesses(this.witnessItem)
       .then
       alert('The witness details added for the Event :  ' +this.witnessItem.eventId+ ' successfully');
       this.refreshTab()
        this.witnessItem=new QaEventWitnesses();
     
     
     }
 
}