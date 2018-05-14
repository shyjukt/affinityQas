import { QMSServices } from 'app/services/index';
import { DsCounterTokenLink } from 'app/QMS/resources/DsCounterTokenLink.resource'
import { DsCounterMast } from 'app/QMS/resources/DsCounterMast.resource'
import { Component, OnInit } from '@angular/core';
import {DsVewCounterTokenSummary } from 'app/QMS/resources/DsVewCounterTokenSummary.resource'
import { DatePipe } from '@angular/common';
import { SearchDsToken } from '../resources/SearchDsToken.resource';
import { DsVewCounterTokenLink } from 'app/QMS/resources/DsVewCounterTokenLink.resource'
import { DsTokenStatus } from 'app/QMS/resources/DsTokenStatus.resource'



@Component({
 selector: 'app-ds-rep-counter-summary',
  templateUrl: './ds-rep-counter-summary.component.html'
 , styleUrls: ['./ds-rep-counter-summary.component.css']
})
export class DsViewCounterSummaryComponent implements OnInit {
 
  private curdate;
private id;
private Groupid;
public message;
private statusName;
private processDesc;
private statusNo;
private filterResult :any;
private recFilter :any;


selectedRow : Number;
 
    ngOnInit() 
    {
    this.doInit();
}

doInit()
{
  this.searchModel.fromTime=this.curdate;
   
   this.qmsservices.listDsVewCounterTokenSummary(this.searchModel)
  .then(data => this.counterTokenSummary= data); 
 /*  this.qmsservices.listDsTokenStatus()
  .then(data=>this.statusDetails =data);
  console.log(this.statusDetails ) */

  
}
  constructor(private qmsservices : QMSServices ,  public datepipe: DatePipe) 
{
    let d: Date = new Date();
    this.curdate=this.datepipe.transform(d,'yyyy-MM-dd');
    
 }
 
  searchModel : SearchDsToken =new SearchDsToken();
   counterTokenSummary : DsVewCounterTokenSummary[] = [];
    counterTokenLink :DsVewCounterTokenLink[]=[];
    searchRec: SearchDsToken =new SearchDsToken();
     statusDetails : DsTokenStatus[]=[];
    


private retrieve() 
{
	this.qmsservices.listDsVewCounterTokenSummary(this.searchModel)
  .then(data => this.counterTokenSummary= data);
  //console.log(this.counterTokenSummary);
  
}

  clearModel() {
    this.searchModel =new SearchDsToken() ;    
  };

refresh(){
  this.retrieve();
}
searchToken() 
{
   this.qmsservices.listDsVewCounterTokenSummary(this.searchModel)
  .then(data => this.counterTokenSummary = data);
 
};

setClickedRow(index) {
  
  this.selectedRow = index;

  //this.filterResult = this.counterTokenSummary.find(item => item.counterId === this.id && item.processStatus===this.processDesc);
    
   this.searchRec.counterId=this.recFilter.counterId;

   this.searchRec.tokenStatus=this.statusNo;
    
  if(this.searchModel.fromTime !=undefined)
  {
    this.searchRec.fromTime=this.searchModel.fromTime;
  }
 if(this.searchModel.toTime !=undefined)
 {
  this.searchRec.toTime=this.searchModel.toTime;
 }
   console.log(this.searchRec);

   this.showCounterTokenLink();
  
}
selectedId(req) 
{ 
  this.recFilter=req;

  this.id=this.recFilter.counterId;
   
  this.statusNo=this.recFilter.statusCode;
}

  /* this.processDesc=this.recFilter.processStatus;
 
  if(this.processDesc=="ACTIVE")
  {
    this.statusNo=0;
  }
   if(this.processDesc=="IN COUNTER") 
   {
    this.statusNo=1;
   } 
   if(this.processDesc=="COMPLETED") 
   {
    this.statusNo=5;
   }
   if(this.processDesc=="CANCELLEDD") 
   {
    this.statusNo=-1;
   }
   if(this.processDesc=="ON HOLD") 
   {
    this.statusNo=2;
   }
};
 */
showCounterTokenLink()
{
   this.qmsservices.listDsVewCounterTokenLink(this.searchRec)
  .then(data => this.counterTokenLink = data);
  //console.log(this.counterTokenLink)
}

print(): void{ let printContents, popupWin;
  printContents = document.getElementById('printSection').innerHTML;
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

         <h1><center>Counter Summary</center></h1>
         
         ${printContents}
        
         </body>
     </html>`
  );
  popupWin.document.close();

};
printDetail(): void{ let printContents, popupWin;
  printContents = document.getElementById('printdetails').innerHTML;
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

         <h1><center>Counter Summary Details</center></h1>
         
         ${printContents}
        
         </body>
     </html>`
  );
  popupWin.document.close();


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
		
	
