import { QASServices } from 'app/services/index';
import { QASServicesObservable } from 'app/services/index';
import { QaCategoryMast } from 'app/QAS/resources/QaCategoryMast.resource'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qa-category',
  templateUrl: './qa-category.component.html'
  //  , styleUrls: ['./app-qa-category.component.css']
})
export class QaCategoryComponent implements OnInit {

  constructor(private qasservices: QASServices, private _QASServicesObservable: QASServicesObservable) { }
  
  ngOnInit() {
    this.doInit();
  }

  doInit() {
    this.retrieve();
  }

  modelColl: QaCategoryMast[] = [];
  modelItem: QaCategoryMast = new QaCategoryMast();


  private retrieve() {
    this._QASServicesObservable.listQaCategoryMastObservable(this.modelItem)
      .subscribe(data => {
        this.modelColl = data;
        console.log(this.modelColl);

      });
  }


  saveInfo() {
    if (isNaN(this.modelItem.categoryCode)) {
      this._QASServicesObservable.createQaCategoryMastObservable(this.modelItem).flatMap(data => {
        this.modelItem = data;
        console.log(this.modelItem);
        return this._QASServicesObservable.listQaCategoryMastObservable(this.modelItem)
      }).subscribe(data => {
        this.modelColl = data;
        console.log(this.modelColl);
        this.clearModel();
      });
    }
    else {

      this._QASServicesObservable.editQaCategoryMastObservable(this.modelItem).flatMap(data => {
        this.modelItem = data;
        console.log(this.modelItem);
        return this._QASServicesObservable.listQaCategoryMastObservable(this.modelItem)
      }).subscribe(data => {
        this.modelColl = data;
        console.log(this.modelColl);
        this.clearModel();
      });

    }
  }

  removeItem(Val) {
    //this.qasservices.deleteQaCategoryMast( data.categoryCode);
    console.log(Val);
    this._QASServicesObservable.deleteQaCategoryMastObservable(Val.categoryCode).flatMap(data => {
      console.log(this.modelColl);
      return this._QASServicesObservable.listQaCategoryMastObservable(this.modelItem)
    }).subscribe(data => {
      this.modelColl = data;
      console.log(this.modelColl);
    });
    this.doInit();
  };

  editItem(data) {
    this.modelItem.categoryCode = data.categoryCode;
    this.modelItem.categoryDesc = data.categoryDesc;
    this.modelItem.prevId = data.prevId;
  };

  clearModel() {
    this.modelItem = new QaCategoryMast();
  };

  refresh() {
    this.doInit();
  }

}


