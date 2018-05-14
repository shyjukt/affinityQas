import { QMSServices } from 'app/services/index';
import { DsCounterTokenLink } from 'app/QMS/resources/DsCounterTokenLink.resource'
import { DsCounterMast } from 'app/QMS/resources/DsCounterMast.resource'
import { Component, OnInit } from '@angular/core';


@Component({
 selector: 'app-ds-counter-mast',
  templateUrl: './ds-counter-mast.component.html'
 //, styleUrls: ['./ds-counter-mast.component.css']
})
export class DsCounterMastComponent implements OnInit {
  
    ngOnInit() {
    this.doInit();
}

doInit()
{
  this.modelItem.activeYn='Y';
	this.retrieve();
}


constructor(private qmsservices : QMSServices ) { }


modelColl : DsCounterMast[] = []; 
modelItem : DsCounterMast = new DsCounterMast(); 


private retrieve() {
	this.qmsservices.listDsCounterMast()
			.then(data => this.modelColl= data);
	}

saveInfo() {

 
if (  isNaN (this.modelItem.counterId ) )
 {
    this.qmsservices.createDsCounterMast(this.modelItem)	;	
 }
 else   
 {
    this.qmsservices.editDsCounterMast(this.modelItem)	;	
 }
    this.clearModel();
}
/////////////////////////////////////////////
  removeItem(data) {


this.qmsservices.deleteDsCounterMast(data.counterId);

  }; 

  editItem(data) {
    this.modelItem=data;
    this.modelItem.counterId=data.counterId;
    this.modelItem.counterName=data.counterName;
    this.modelItem.shortName=data.shortName;
    this.modelItem.counterGroupId=data.counterGroupId;
    this.modelItem.activeYn=data.activeYn;
    this.modelItem.counterNameNl=data.counterNameNl;
  };

  clearModel() {
    this.modelItem =new DsCounterMast() ;    
  };

refresh(){
  this.retrieve();
}

print(): void{ let printContents, popupWin;
  printContents = document.getElementById('printSectioncounter').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
     <html>
         <head>
             <title></title>
             <style>

             #counter {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          
          #counter td, #counter th {
              border: 1px solid #ddd;
              padding: 8px;
          }
           #counter th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              color: #7a4c41;
          }

          
             </style>
         </head>
         <body onload="window.print();window.close()">

         <h1><center>Counter Master Details</center></h1>
         
         ${printContents}
        
         </body>
     </html>`
  );
  popupWin.document.close();

  //window.print();
};

tableToExcel(table, name){
  let uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
      , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
      , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
          if (!table.nodeType) table = document.getElementById(table)
          var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
          window.location.href = uri + base64(format(template, ctx))
      }
}
		
	
