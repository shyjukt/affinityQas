import { QASServices } from 'app/services/index';
import { QASServicesObservable } from 'app/services/index';
import { QaPersonalMast } from 'app/QAS/resources/QaPersonalMast.resource';
import { QaEventDefaultUsers } from 'app/QAS/resources/QaEventDefaultUsers.resource';
import { QaCategoryMast } from 'app/QAS/resources/QaCategoryMast.resource';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/concat';
import 'rxjs/Rx';

@Component({
  selector: 'app-qa-category-users',
  templateUrl: './qa-category-users.component.html'
  //  , styleUrls: ['./app-qa-category-users.component.css']
})
export class QaCategoryUsersComponent implements OnInit {

  private filterResult = [];
  modelColl: QaEventDefaultUsers[] = [];
  modelItem: QaEventDefaultUsers = new QaEventDefaultUsers();
  persColl: QaPersonalMast[] = [];
  categoryColl: QaCategoryMast[] = [];
  categoryItem: QaCategoryMast = new QaCategoryMast();

  constructor(private qasservices: QASServices, private _QASServicesObservable: QASServicesObservable) { }

  ngOnInit() {
    this.doInit();

  }
  doInit() {
    this.getFlatMap();
  }

  private getFlatMap() {

    this._QASServicesObservable.listQaPersonalMastObservable().flatMap(data => {
      this.persColl = data;
      
      return this._QASServicesObservable.listQaCategoryMastObservable(this.categoryItem)
    }).flatMap(data => {
      this.categoryColl = data;
     
      return this._QASServicesObservable.listQaEventDefaultUsersObservable(this.modelItem)
    }).subscribe(data => {
      this.modelColl = data;
      console.log(this.modelColl);
      for (let i in this.modelColl) {
        this.modelColl[i].staffName = this.staffDetails(this.modelColl[i].persCode);
        this.modelColl[i].categoryName = this.categoryDetails(this.modelColl[i].eventCategory);
      }
      console.log('QaEventDefaultUsers :' + this.modelColl);

    });

  }

  private staffDetails(val) {
    return this.persColl.filter((item: QaPersonalMast) => item.persCode === val)[0].printName;
  }

  private categoryDetails(val) {
    return this.categoryColl.filter((item: QaCategoryMast) => item.categoryCode === val)[0].categoryDesc;
  }

  saveInfo() {
    if (isNaN(this.modelItem.runId)) {
      this.qasservices.createQaEventDefaultUsers(this.modelItem)
      .then((response) => 
      {
        this.refresh();
      });
    }
    else {
      this.qasservices.editQaEventDefaultUsers(this.modelItem)
      .then((response) => 
      {
        this.refresh();
      });
    }
    this.doInit();
    this.clearModel();
  }

  removeItem(data) {
    this.qasservices.deleteQaEventDefaultUsers(data.runId);
    this.doInit();
  };

  editItem(data) {
    this.modelItem = data;
  };

  clearModel() {
    this.modelItem = new QaEventDefaultUsers();
  };

  refresh() {
    this.doInit();
  }
}

