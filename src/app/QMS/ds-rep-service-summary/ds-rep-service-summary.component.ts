import { Component, OnInit } from '@angular/core';
import { QMSServices } from 'app/services/index';
import { SearchDsToken } from 'app/QMS/resources/SearchDsToken.resource';
import { DsVewTokenSummary } from 'app/QMS/resources/DsVewTokenSummary.resource';
import { DatePipe } from '@angular/common';
import { DsVewTokenDetail } from '../resources/DsVewTokenDetail.resource';
import { DsTokenStatus } from '../resources/DsTokenStatus.resource';
@Component({
  selector: 'app-ds-rep-service-summary',
  templateUrl: './ds-rep-service-summary.component.html',
  styleUrls: ['./ds-rep-service-summary.component.css']
})
export class DsRepServiceSummaryComponent implements OnInit {
  private curdate;
  private service;
  selectedRow: Number;
  constructor(private qmsservices : QMSServices,public datepipe: DatePipe) { 
    let d: Date = new Date();
    this.curdate=this.datepipe.transform(d,'yyyy-MM-dd');
  }
  searchModel : SearchDsToken =new SearchDsToken();
  searchModelSevice : SearchDsToken =new SearchDsToken();
  tokensummaryColl : DsVewTokenSummary[] = [];
  servicesummaryDetail:DsVewTokenDetail[]=[];
  tokenStatus : DsTokenStatus[] =[];
  ngOnInit() {
    this.doInit();
  }

  doInit()
  {
    this.searchModel.fromTime=this.curdate;
  
    this.listTokenSummary() ;

    this.qmsservices.listDsTokenStatus()
    .then(data => this.tokenStatus= data);
    console.log('++++++++')
    console.log(this.tokenStatus);
  
  
  }
    

  listTokenSummary() 
{
  console.log(this.searchModel);
  this.qmsservices.listDsVewTokenSummary(this.searchModel)
  .then((data) => this.tokensummaryColl = data);
  //console.log(this.tokensummaryColl)
};

clearSearch()
{
  this.searchModel= new SearchDsToken();
};
selectedService(reqDetail) {
  this.searchModelSevice.counterGroupId = reqDetail.serviceId;
  this.service= 'Detail Report of '+reqDetail.service;

  console.log(this.searchModelSevice);
  this.selectedRow=reqDetail;

  if(this.searchModel.fromTime !=undefined)
  {
    this.searchModelSevice.fromTime=this.searchModel.fromTime;
  }
 if(this.searchModel.toTime !=undefined)
 {
  this.searchModelSevice.toTime=this.searchModel.toTime;
 }
  this.qmsservices.listDsVewTokenDetail(this.searchModelSevice)
  .then((data) => this.servicesummaryDetail = data);

  console.log(this.servicesummaryDetail)

};

printServicedetail(): void{ let printContents, popupWin;
  printContents = document.getElementById('service-Summary-detail').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
     <html>
         <head>
             <title></title>
             <style>

             #service-Summary-detail {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          
          #service-Summary-detail td, #service-Summary-detail th {
              border: 1px solid #ddd;
              padding: 8px;
          }
           #service-Summary-detail th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              color: #7a4c41;
          }

      
             </style>
         </head>
         <body onload="window.print();window.close()">
         <h1><center>Service Summary Report</center></h1>
       
         ${printContents}
        
         </body>
     </html>`
  );
  popupWin.document.close();

  //window.print();
};

print(): void{ let printContents, popupWin;
  printContents = document.getElementById('service-Summary').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
     <html>
         <head>
             <title></title>
             <style>

             #service-Summary {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          
          #service-Summary td, #service-Summary th {
              border: 1px solid #ddd;
              padding: 8px;
          }
           #service-Summary th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              color: #7a4c41;
          }

      
             </style>
         </head>
         <body onload="window.print();window.close()">
         <h1><center>Service Summary Report</center></h1>
       
         ${printContents}
        
         </body>
     </html>`
  );
  popupWin.document.close();

  //window.print();
};

tableToExcel(table, filename){
  let uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
       , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
       , format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
          if (!table.nodeType) table = document.getElementById(table)
           var ctx = {worksheet: name || 'Details', table: table.innerHTML}
          //window.location.href = uri + base64(format(template, ctx))
 
   let link = document.createElement('a');
   link.setAttribute('href', uri + base64(format(template, ctx)));
   link.setAttribute('download', filename);
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
       }
 
}
