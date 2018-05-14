import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {IMyOptions,IMyDate,IMyDateModel} from 'mydatepicker';
import { QMSServices } from 'app/services/index';
import { DsCounterGroup } from 'app/QMS/resources/DsCounterGroup.resource';
import { DsTokenStatus } from 'app/QMS/resources/DsTokenStatus.resource'
import { DsCounterMast } from 'app/QMS/resources/DsCounterMast.resource'
import { SearchDsToken } from "app/QMS/resources/SearchDsToken.resource";
//import { GridOptions } from "ag-grid";
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-ds-Report',
  templateUrl: './ds-Report.component.html',
  styleUrls: ['./ds-Report.component.css']
})
export class TokenReportComponent implements OnInit {

  ngOnInit() {
   
    this.model.da=new Date();
    this.doInit();
}
doInit()
{
  this.qmsservices.listDsCounterGroups()
  .then(data => this.counterGroups= data);
  
  this.qmsservices.listDsTokenStatus()
  .then(data => this.tokenStatus= data);
  console.log(this.tokenStatus);

  this.qmsservices.listDsCounterMast()
  .then(data => this.counterMast= data);
}

  model: any = {};
  modelColl : DsCounterMast[] = []; 
  counterGroups : DsCounterGroup[] =[];   //array of countergroups items//
  tokenStatus : DsTokenStatus[] =[];
  counterMast: DsCounterMast[] =[]; 
  searchModel : SearchDsToken =new SearchDsToken();

  //private gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];
  private fromDate: IMyDate = {year: 0, month: 0, day: 0};
  private toDate: IMyDate = {year: 0, month: 0, day: 0};
  private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd/mm/yyyy',
        disableHeaderButtons:true,
        openSelectorOnInputClick:true
    };

 
  constructor(private qmsservices : QMSServices, private _sanitizer: DomSanitizer) { 
    
    let d: Date = new Date();
    this.fromDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    this.toDate = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    
    /* this.gridOptions = {};
        var agg = this;
        var columnDefs = [
          {headerName: "Token ID", field: "tokenId"},
          {headerName: "Counter Group Id", field: "counterGroupId"},
          {headerName: "Token Status", field: "tokenStatus"},
          {headerName: "prev Token Id", field: "prevTokenId"},
          {headerName: "Token equence", field: "tokenSequence"},
          {headerName: "counter Id", field: "counterId"}
  
        ];
      this.qmsservices.listDsTokenColl()
			.then(data => this.rowData= data);
    
        agg.gridOptions = {
         columnDefs: columnDefs,
          pagination:true,
          enableSorting: true,
          paginationPageSize:10,
          enableFilter:true
         
        }; */
       
        
  }

  fromDateChanged(event: IMyDateModel) {
      // Update value of selDate variable
      this.fromDate = event.date;
  }
  toDateChanged(event: IMyDateModel) {
    // Update value of selDate variable
    this.toDate = event.date;
}
/* onRowClicked function focus on selected row and get respective row data */
onRowClicked(row) {
 // this.gridOptions.api.getFocusedCell();
 // console.log(row.data);
  console.log(this.counterMast)
}
/* onBtExport function export grid data into csv format/Excel */
 onBtExport() {
  var params = {
    skipHeader: false,
    skipFooters: true,
    skipGroups: true,
    fileName: "Token-Report.csv"
     
  };

  //this.gridOptions.api.exportDataAsCsv(params);
}
}
