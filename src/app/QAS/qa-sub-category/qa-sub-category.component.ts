import { QASServices } from 'app/services/index';
import { QASServicesObservable } from 'app/services/index';
import { QaSubCategoryMast } from 'app/QAS/resources/QaSubCategoryMast.resource'
import { QaCategoryMast } from 'app/QAS/resources/QaCategoryMast.resource'
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-qa-sub-category',
  templateUrl: './qa-sub-category.component.html'
   , styleUrls: ['./app-qa-sub-category.component.css']
})
export class QaSubCategoryComponent implements OnInit {
  
  modelColl: QaSubCategoryMast[] = [];
  modelItem: QaSubCategoryMast = new QaSubCategoryMast();
  category: QaCategoryMast[] = [];
  categoryItem: QaCategoryMast = new QaCategoryMast();

  constructor(private qasservices: QASServices, private _QASServicesObservable: QASServicesObservable) { }

  ngOnInit() {
    this.doInit();
  }

  doInit() {
    this.getFlatMap();
  }
  private getFlatMap() {

    this._QASServicesObservable.listQaCategoryMastObservable(this.categoryItem).flatMap(data => {
      this.category = data;
      console.log(this.category);
      return this._QASServicesObservable.listQaSubCategoryMastObservable(this.modelItem)
    }).subscribe(data => {
      this.modelColl = data;
      console.log(this.modelColl);
      for (let i in this.modelColl) {
        this.modelColl[i].categoryDesc = this.CategoryDetails(this.modelColl[i].categoryCode);
      }
      console.log('QaSubcategory :' + this.modelColl);

    });

  }
  /*private retrieve() {
      this._QASServicesObservable.listQaSubCategoryMastObservable(this.modelItem)
     .subscribe(response => {
       this.modelColl = response;
       for (let i in this.modelColl){
        this.modelColl[i].categoryDesc=this.CategoryDetails(this.modelColl[i].categoryCode);
     } 
       console.log('QaSubcategory :'+this.modelColl);
     },
     error => {
       console.log(error.text());
     });
   
  }
  private getCategory()
  {
     this._QASServicesObservable.listQaCategoryMastObservable(this.categoryItem)
    .subscribe(response => {
      this.category  = response;
      console.log('getcategory:'+this.category);
    },
    error => {
      console.log(error.text());
    });
  }
  */
  private CategoryDetails(val) {
    return this.category.filter((item: QaCategoryMast) => item.categoryCode === val)[0].categoryDesc;
  }
  saveInfo() {
    if (isNaN(this.modelItem.subCatCode)) {
      this.qasservices.createQaSubCategoryMast(this.modelItem);
    }
    else {
      this.qasservices.editQaSubCategoryMast(this.modelItem);

    }
    this.doInit();
    this.clearModel();
  }

  removeItem(data) {
    this.qasservices.deleteQaSubCategoryMast(data.subCatCode);
    this.doInit();

  };

  editItem(data) {
    this.modelItem = data;
  };

  clearModel() {
    this.modelItem = new QaSubCategoryMast();
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
               <title>SubCategory Report</title>
               <style>
  
                   //........Customized style.......
               </style>
           </head>
           <body onload="window.print();window.close()">
           <h1><center>Subcategory Report</center></h1>
           ${printContents}
           </body>
       </html>`
    );
    popupWin.document.close();
  };

}

