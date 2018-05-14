import { QASServices } from 'app/services/index';
import { QASServicesObservable } from 'app/services/index';
import { QaEventLocationMast } from 'app/QAS/resources/QaEventLocationMast.resource'
import { QaPersonalMast } from 'app/QAS/resources/QaPersonalMast.resource'
import { QaEventLocationUsers } from 'app/QAS/resources/QaEventLocationUsers.resource'
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-qa-location-users',
  templateUrl: './qa-location-users.component.html'
})
export class QaLocationUsersComponent implements OnInit {

  modelColl: QaEventLocationUsers[] = [];
  modelItem: QaEventLocationUsers = new QaEventLocationUsers();
  qalocation: QaEventLocationMast[] = [];
  staff: QaPersonalMast[] = [];

  constructor(private qasservices: QASServices, private _QASServicesObservable: QASServicesObservable) { }

  ngOnInit() {
    this.doInit();
  }

  doInit() {
    this.getFlatMap();
  }

  private getFlatMap() {

    this._QASServicesObservable.listQaPersonalMastObservable().flatMap(data => {
      this.staff = data;
      console.log(this.staff);
      return this._QASServicesObservable.listQaLocationsObservable()
    }).flatMap(data => {
      this.qalocation = data;
      console.log(this.qalocation);
      return this._QASServicesObservable.listQaEventLocationUsersObservable(this.modelItem)
    }).subscribe(data => {
      this.modelColl = data;
      console.log(this.modelColl);
      for (let i in this.modelColl) {
        this.modelColl[i].location = this.locationusers(this.modelColl[i].locationCode);
        this.modelColl[i].StaffName = this.staffDetails(this.modelColl[i].persCode);
      }
      console.log( this.modelColl);

    });

  }
  private locationusers(val) {

    return this.qalocation.filter((item: QaEventLocationMast) => item.locationCode === val)[0].locationName;

  }
  private staffDetails(val) {
    return this.staff.filter((item: QaPersonalMast) => item.persCode === val)[0].printName;

  }
  /*private getStaff()
  {
     this._QASServicesObservable.listQaPersonalMastObservable()
    .subscribe(response => {
      this.staff = response;
      console.log('getstaff :'+this.staff);
    },
    error => {
      console.log(error.text());
    });
  }
  private getLocation()
  {
     this._QASServicesObservable.listQaLocationsObservable()
     .subscribe(response => {
       this.qalocation = response;
       console.log('getlocation :'+this.qalocation);
     },
     error => {
       console.log(error.text());
     });
  } */

  saveInfo() {
    if (isNaN(this.modelItem.runId)) {
      this.qasservices.createQaEventLocationUsers(this.modelItem);
    }
    else {
      this.qasservices.editQaEventLocationUsers(this.modelItem);
    }
    this.doInit();
    this.clearModel();
  }
  removeItem(data) {

    this.qasservices.deleteQaEventLocationUsers(data.runId);
    this.doInit();

  };

  editItem(data) {
    this.modelItem = data;
  };

  clearModel() {
    this.modelItem = new QaEventLocationUsers();
  };
  refresh() {
    this.doInit();
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('printSection').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
     <html>
         <head>
             <title>Event Location User Detail Report</title>
             <style>

                 //........Customized style.......
             </style>
         </head>
         <body onload="window.print();window.close()">
         <h1><center>Event Location User Details</center></h1>
         ${printContents}
         </body>
     </html>`
    );
    popupWin.document.close();

  };

}





