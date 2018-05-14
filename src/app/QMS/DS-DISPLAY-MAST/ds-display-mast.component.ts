import { QMSServices } from 'app/services/index';
import { DsDisplayMast } from 'app/QMS/resources/DsDisplayMast.resource'
import { Component, OnInit } from '@angular/core';


@Component({
 selector: 'app-ds-display-mast',
  templateUrl: './ds-display-mast.component.html'
//  , styleUrls: ['./request-type.component.css']
})
export class DsDisplayMastComponent implements OnInit {
    ngOnInit() {
    this.doInit();
}

doInit()
{
	this.retrieve();
}

constructor(private qmsservices : QMSServices ) { }
 
modelColl : DsDisplayMast[] = []; 
modelItem : DsDisplayMast = new DsDisplayMast(); 


private retrieve() {
  
  this.qmsservices.listDsDisplayMast()
  .then(data => this.modelColl= data);
  
}

saveInfo() {

 
if (  isNaN (this.modelItem.displayId ) )
 {
    this.qmsservices.createDsDisplayMast(this.modelItem)	;	
 }
 else   
 {
    this.qmsservices.editDsDisplayMast (this.modelItem)	;	
 }
    this.clearModel();
}
/////////////////////////////////////////////
  removeItem(data) {


this.qmsservices.deleteDsDisplayMast( data.displayId);

  }; 

  editItem(data) {
    //this.modelItem()=data[];
    //this.qmsservices.editDsDisplayMast (this.modelItem)
   
    this.modelItem.displayId =data.displayId;
    this.modelItem.displayName =data.displayName;
    
  };

  clearModel() {
    this.modelItem =new DsDisplayMast() ;    
  };

refresh(){
  this.retrieve();
}

	
}
		
	
