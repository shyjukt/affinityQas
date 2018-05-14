import { QASServices, myService } from 'app/services/index';
import { QASServicesObservable,ErpServices } from 'app/services/index';
import { QaEventsCollVew } from '../resources/QaEventsCollVew.resource'
import { Pipe, PipeTransform, Component, OnInit,EventEmitter,Input,Output,Injectable } from '@angular/core';
import { QaEventSearchCriteria } from 'app/QAS/resources/QaEventSearchCriteria.resource';
import { QaPersonalMast } from 'app/QAS/resources/QaPersonalMast.resource';
import { QaCategoryMast } from 'app/QAS/resources/QaCategoryMast.resource';
import { QaSubCategoryMast } from 'app/QAS/resources/QaSubCategoryMast.resource';
import { QaEventLocationMast } from 'app/QAS/resources/QaEventLocationMast.resource';
import { QaEventDepartmentMast } from 'app/QAS/resources/QaEventDepartmentMast.resource';
import { DatePipe } from '@angular/common';
import { QaEventsColl } from 'app/QAS/resources/QaEventsColl.resource';
import { QaEventMessages } from 'app/QAS/resources/QaEventMessages.resource';
import { QaEventUsers } from 'app/QAS/resources/QaEventUsers.resource';
import { Observable } from 'rxjs/Observable';
import { QaEventDefaultUsers } from 'app/QAS/resources/QaEventDefaultUsers.resource';

import { HomeComponent } from 'app/home/home.component';
import { Console } from '@angular/core/src/console';
import { Response } from '@angular/http/src/static_response';
import { QaEventWitnesses } from '../resources/QaEventWitnesses.resource';
import { QaEventParameters } from '../resources/QaEventParameters.resource';
import { QaEvents } from 'app/QAS/resources/QaEvents.resource';
import { _PersInfo } from '../../resources/_PersInfo.resource';

@Component({
    selector: 'app-qa-event-list',
    templateUrl: './qa-event-list.component.html',
     styleUrls: ['./qa-event-list.component.css']
})
export class QaEventListComponent implements OnInit {
    public buttonEnableDisable;
    public subcategory:any;
    private eventTime;
    private parmFilter:any;
    private msgFilter:any;
    private userNew; 

    public p_createQaEventAction:boolean;
    public p_createQaEventConsequences:boolean;
    public p_createQaEventComment:boolean;
    public p_createQaEventRecommentation:boolean;
    private p_editQaEventComment:boolean;
    private p_editQaEventAction:boolean;
    private p_editQaEventRecommentation:boolean;
    private p_editQaEventConsequences:boolean;

    private curdate;
    public id;
    private filterResult: any;
    public  msg = [];
    public user = [];
    public witness = [];
    selectedRow: Number;
    public IncidentCount: number = 0;
    public homeTabSelect: boolean = true;
    private editMenu: any;
    private eventTab: any;
    private tempMenuItems = this._home.menuItem;
    /* dynamic tab */
    @Output()
    emitEvent :any[];
    
    ngOnInit() {
        this.doInit();
    }
   
    doInit() {
        this.searchModel.fromTime = this.curdate;
        this.searchEvent();
        this.retrieve();
    }

    constructor(private qasservices: QASServices, private _service: ErpServices,private _QASServicesObservable: QASServicesObservable,
        public datepipe: DatePipe, private _home: HomeComponent,private myService :myService,private _eServices: myService) {
        let d: Date = new Date();
        this.curdate = this.datepipe.transform(d, 'yyyy-MM-dd');
    }
    eventItem: QaEventsCollVew = new QaEventsCollVew();
    messageItem: QaEventMessages = new QaEventMessages();
    subcategoryItem: QaSubCategoryMast = new QaSubCategoryMast();
    categoryItem: QaCategoryMast = new QaCategoryMast();
    searchModel: QaEventSearchCriteria = new QaEventSearchCriteria();
    witnessItem: QaEventWitnesses = new QaEventWitnesses();
    paramItem: QaEventParameters = new QaEventParameters();
    qaEventHdr :QaEvents =new QaEvents();
    
    persInfo:_PersInfo = new _PersInfo();
    persColl: QaPersonalMast[] = [];
    categoryColl: QaCategoryMast[] = [];
    subcategoryColl: QaSubCategoryMast[] = [];
    locationColl: QaEventLocationMast[] = [];
    departmentColl: QaEventDepartmentMast[] = [];
    eventColl: QaEventsCollVew[] = [];
    userItem: QaEventUsers = new QaEventUsers();

    private retrieve() {

        this.qasservices.listQaPersonalMast()
            .then(data => this.persColl = data);
      
        this.qasservices.listQaCategoryMast(this.categoryItem)
            .then(data => this.categoryColl = data);

        this.qasservices.listQaSubCategoryMast(this.subcategoryItem)
            .then(data => this.subcategoryColl = data);

        this.qasservices.listQaLocations()
            .then(data => this.locationColl = data);

        this.qasservices.listQaDepartments()
            .then(data => this.departmentColl = data);

    }

    refresh() {
        this.searchEvent();
    }

    searchEvent() {
        this.qasservices.listQaEvents(this.searchModel)
            .then((data) => {this.eventColl = data;
            console.log(this.eventColl);}
            );
            
    };
    clearSearch() {
        this.searchModel = new QaEventSearchCriteria();
    };

     selectedId(req) {
        this.id = req;
        
    }; 

    setClickedRow(index) {
        this.refresh();
        this.selectedRow = index;
        this.filterResult = this.eventColl.find(item => item.eventId === this.id);
        

        this.qaEventHdr.eventLocation=this.filterResult.eventLocation;
        this.qaEventHdr.createdBy=this.filterResult.createdBy;
        this.qaEventHdr.createdTime=this.filterResult.createdTime;
        this.qaEventHdr.eventCategory=this.filterResult.eventCategory;
        this.qaEventHdr.eventDept=this.filterResult.eventDept;
        this.qaEventHdr.eventId=this.filterResult.eventId;
       
        this.qaEventHdr.eventNo=this.filterResult.eventNo;
        this.qaEventHdr.eventStatus=this.filterResult.eventStatus;
        this.qaEventHdr.eventSubCategory=this.filterResult.eventSubCategory;

      
        this.subcategory = this.subcategoryColl.filter((item: QaSubCategoryMast) => item.categoryCode === this.filterResult.eventCategory);
        
        this.eventTime=this.datepipe.transform(this.filterResult.eventTime, 'yyyy-MM-dd');
        this.qaEventHdr.eventTime=this.eventTime;

        this.msg = this.filterResult.qaEventMessagesVew;
        this.user = this.filterResult.qaEventUsersVew;
        this.witness = this.filterResult.qaEventWitnessesVew;
        this.parmFilter=this.filterResult.qaEventParametersVew.find(item=>item.eventId===this.id)
        if (this.parmFilter!=undefined)
        {
            this.paramItem=this.parmFilter 
        }
        
        this.enableDisable();
        }
        enableDisable(){
            this.p_createQaEventAction=this._service._checkProcessExist("createQaEventAction");
            this.p_createQaEventConsequences=this._service._checkProcessExist("createQaEventConsequences");
            this.p_createQaEventComment=this._service._checkProcessExist("createQaEventComment");
            this.p_createQaEventRecommentation=this._service._checkProcessExist("createQaEventRecommentation");
            this.p_editQaEventComment=this._service._checkProcessExist("editQaEventComment");
            this.p_editQaEventAction=this._service._checkProcessExist("editQaEventAction");
            this.p_editQaEventRecommentation=this._service._checkProcessExist("editQaEventRecommentation");
            this.p_editQaEventConsequences=this._service._checkProcessExist("editQaEventConsequences");
            if(this.filterResult.eventStatus==1){
                return this.buttonEnableDisable=false;
              }else{
                return this.buttonEnableDisable=true;
              } 
           
        }
        
     
    refreshTab()
    { 
        if (this.id !=undefined)
        {   console.log(this.id)
             this.qasservices.getQaEvent(this.id)
            .then
            (response => {
                this.filterResult = response;
                //console.log(this.filterResult)
                this.msg = this.filterResult.qaEventMessagesVew;              
                this.user = this.filterResult.qaEventUsersVew;
                this.witness = this.filterResult.qaEventWitnessesVew;
                console.log(this.witness);  
                this.parmFilter=this.filterResult.qaEventParametersVew.find(item=>item.eventId===this.id)
        if (this.parmFilter!=undefined)
        {
            this.paramItem=this.parmFilter 
        }
                
            }

        )};
}

editHdr()
{

 
  this.qasservices.editQaEventHdr(this.qaEventHdr)
  .then
   ((response) => 
   {
    alert('The Event HDR info for the event :  ' +this.id+ ' updated successfully'); 
     this.refresh();
   });

  }

  firstDropDownChanged(val: any) {
    const obj = this.categoryColl[val];
    if (!obj) return;
    this.subcategory = this.subcategoryColl.filter((item: QaSubCategoryMast) => item.categoryCode === obj.categoryCode);
   
  }
    approveEvent() {
        this.qasservices.approveQaEvent(this.id).then
         ((response) => {this.refresh()
        });
    };
    
    reopenEvent() {
        this.qasservices.reOpenQaEvent(this.id).then
        ((response) => {this.refresh()
       });
    }

    closeEvent() {
        this.qasservices.closeQaEvent(this.id).then
        ((response) => {this.refresh()
       });
        }

    cancelEvent() {
        this.qasservices.cancelQaEvent(this.id).then
        ((response) => {this.refresh()
       });
    }
    selectedMessage(item) {
        this.messageItem = item;
        this.selectedRow=item;
    };

    editDescription() {
    if(this.id !=undefined)
    { 
      this.msgFilter= this.filterResult.qaEventMessagesVew.find(item => item.msgType=== 'I');
       this.messageItem.entryTime=this.msgFilter.entryTime;
      this.messageItem.entryUser=this.msgFilter.entryUser;
      this.messageItem.eventId=this.msgFilter.eventId;
      this.messageItem.messageId=this.msgFilter.messageId;
      
        this.qasservices.editQaEventDescription(this.messageItem)
        .then
        alert('The message edited for Event : '+this.id+ ' successfully');
        this.messageItem=new QaEventMessages();

    }
}

    createAction() {
    
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "A";
        this.qasservices.createQaEventAction(this.messageItem)
        .then
         ((response) => {this.refreshTab()
            alert('The action is created for Event : '+this.id+ ' successfully');
        });
        this.messageItem=new QaEventMessages();
    }
    editAction() {
        this.qasservices.editQaEventAction(this.messageItem)
        .then
        ((response) => {this.refreshTab()
        alert('The actions edited for Event : '+this.id+ ' successfully');
        });
        this.messageItem=new QaEventMessages();

    }

    createConsequences() {
        
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "C";
        this.qasservices.createQaEventConsequences(this.messageItem)
        .then
         ((response) => {this.refreshTab()
           alert('The consequence created for Event : '+this.id+ ' successfully');
       });
        this.messageItem=new QaEventMessages();
    }

    editConsequences() {
        this.qasservices.editQaEventConsequences(this.messageItem)
        .then
        ((response) => {this.refreshTab()
        alert('The consequences edited for Event : '+this.id+ ' successfully');
        });
        this.messageItem=new QaEventMessages();

    }

    createComment() {

        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "S";
        console.log(this.messageItem);
        this.qasservices.createQaEventComment(this.messageItem)
        .then
        ((response) => {this.refreshTab()
            alert('The comment entered for Event : '+this.id+ ' successfully');
        });
       this.messageItem= new QaEventMessages();
    }

    editComment() {
        this.qasservices.editQaEventComment(this.messageItem)
        .then
        ((response) => {this.refreshTab()
            alert('The comment edited for Event : '+this.id+ ' successfully');
        });
        this.messageItem=new QaEventMessages();
    }

    createRecommendation() {
       
        this.messageItem.eventId = this.id;
        this.messageItem.msgType = "R";
        this.qasservices.createQaEventRecommendation(this.messageItem)
        .then
        ((response) => {this.refreshTab()
            alert('The recommendations entered for Event : '+this.id+ ' successfully');
        });
        this.messageItem=new QaEventMessages();
    } 

    editRecommendation() {
        this.qasservices.editQaEventRecommendation(this.messageItem)
        .then
        ((response) => {this.refreshTab()
            alert('The recommendations edited for Event : '+this.id+ ' successfully');
        });
       this.messageItem=new QaEventMessages();
    }

    selectedUser(obj) {
        this.userItem = obj;
        this.selectedRow=obj;
     
        if(this._service.persInfo.persCode==this.userItem.addedBy){
            alert('This user added by another user');  
        }
      
    };

    deleteUser() {
        
        this.persColl.forEach(element => {
            if (this.userItem.persCode == element.persCode) {
              this.userNew = element.printName
            }

          });
    
        if(this._service.persInfo.persCode==this.userItem.addedBy){
              
       if(confirm("Are you sure to delete  "+ this.userNew+ " from this event ?")) {
            this.qasservices.deleteQaEventUser(this.userItem.eventUserId).
            then 
            ((response) => {this.refreshTab()
                alert('The User ' + this.userNew +'deleted successfully');
            });
          }}else{
            alert(this._service.persInfo.printName +'has no privilage to delete this user');
          }
      
    }
  
    editUser() {
        this.persColl.forEach(element => {
            if (this.userItem.persCode == element.persCode) {
              this.userNew = element.printName
            }

          });
          
       
        this.qasservices.editQaEventUser(this.userItem)
        .then
        ((response) => {this.refreshTab()
            alert('The User '+ this.userNew + 'edited successfully');
        });
        
        
        this.userItem=new QaEventUsers();
    }

    createUser() {
        
        
        this.userItem.eventId = this.id
        this.userItem.userType = "D"
        this.userItem.accessType = 0
        this.qasservices.createQaEventUser(this.userItem)
        .then
        ((response) => {this.refreshTab()
            alert('The User is added for the Event : '+this.id+ ' successfully');
        });
        this.userItem=new QaEventUsers();
    }

    selectedWitness(wit)
    {
      this.witnessItem=wit;
      this.selectedRow =wit;
      
    }
  
    editWitness()
    {
      this.qasservices.editQaEventWitnesses(this.witnessItem)
      .then((response)=>{
        alert('The witness details updated for the Event :  ' +this.witnessItem.eventId+ ' successfully');
        
        this.refreshTab();
      });
     
    }
      deleteWitness()
     {  
      this.qasservices.deleteQaEventWitnesses(this.witnessItem.witnessId)
      .then
      ((response) => {
        this.refreshTab();
       
        alert('The witness details deleted currosponds to  :  ' +this.witnessItem.eventId+ ' successfully');
      });
          
     }    
     createWitness()
     {
        this.witnessItem.eventId = this.id;
       
        this.qasservices.createQaEventWitnesses(this.witnessItem)
       .then
       ((response) => {

           this.refreshTab();
           alert('The witness details added for the Event :  ' +this.id+ ' successfully');
           
       
    });
       this.witnessItem=new QaEventWitnesses();
     
     }
     /*parameter*/
editParameters()
{ if(this.id !=undefined)
    {this.parmFilter=this.filterResult.qaEventParametersVew.find(item=>item.eventId===this.id)
        this.paramItem.eventParamId=this.parmFilter.eventParamId;
        this.paramItem.eventId=this.parmFilter.eventId;
        this.paramItem.paramId=this.parmFilter.paramId;
  this.qasservices.editQaEventParameters(this.paramItem)
.then
((response) => {this.refreshTab()
    alert('The parameter info updated for the event :  ' +this.paramItem.eventId+ ' successfully');
});
}
}

createParameters()
{ 
    if(this.id !=undefined)
    { 
    this.paramItem.eventId=this.id
    this.paramItem.paramId=1
    this.qasservices.createQaEventParameters(this.paramItem)
    .then
    ((response) => {this.refreshTab()
    alert('The patient Info added for the event:  ' +this.paramItem.eventId+ ' successfully');
    });
}
}

deleteParameter()
{ 
    if(this.id!=undefined )
    { 
    this.parmFilter=this.filterResult.qaEventParametersVew.find(item=>item.eventId===this.id)
    this.paramItem.eventParamId=this.parmFilter.eventParamId;
    this.paramItem.eventId=this.parmFilter.eventId;
    this.paramItem.paramId=this.parmFilter.paramId;
    this.paramItem.paramValue=this.parmFilter.paramValue; 
    this.qasservices.deleteQaEventParameters(this.paramItem.eventParamId)
    .then
    ((response) => {this.refreshTab()
    alert('Patient Info deleted sucessfully for the event : '+this.id);
    });
    this.paramItem=new QaEventParameters();
    }
}

/*end param*/

   
        print(): void {
        let printContents, popupWin;
        printContents = document.getElementById('printevent').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write(`
       <html>
           <head>
               <title></title>
               <style>

               #event {
                font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            
            #event td, #event th {
                border: 1px solid #ddd;
                padding: 8px;
            }
             #event th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                color: #7a4c41;
            }
          
            .my-header {
                background: red;
                top: 0;
                left: 0;
                position: fixed;
                right: 0;
            }
  
        
               </style>
           </head>
           <body onload="window.print()">
           <div class="my-header">
           <img src="assets/HOSP_LOGO.jpg"></div>
           
           <h1><center>Event Details</center></h1>
         
           ${printContents}
          
           </body>
       </html>`
        );
        popupWin.document.close();

        //window.print();
    };

    tableToExcel(table, filename) {
        let uri = 'data:application/vnd.ms-excel;base64,'
            , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
            , base64 = function (s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
            , format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }
        if (!table.nodeType) table = document.getElementById('printevent')
        var ctx = { worksheet: name || 'Event Details', table: table.innerHTML }
        //window.location.href = uri + base64(format(template, ctx))

        let link = document.createElement('a');
        link.setAttribute('href', uri + base64(format(template, ctx)));
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


}
