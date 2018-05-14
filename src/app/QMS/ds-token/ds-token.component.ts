import { QMSServices } from 'app/services/index';
import { DsToken } from 'app/QMS/resources/DsToken.resource'
import { Component, OnInit } from '@angular/core';

import { DsTokenColl } from "app/QMS/resources/DsTokenColl.resource";
import { SearchDsToken } from "app/QMS/resources/SearchDsToken.resource";
import { DsCounterGroup } from 'app/QMS/resources/DsCounterGroup.resource';
import { DsTokenStatus } from 'app/QMS/resources/DsTokenStatus.resource';
import { ParamTokenIdGroupId } from 'app/QMS/resources/ParamTokenIdGroupId.resource';
import { ParamTokenIdExtRefId } from 'app/QMS/resources/ParamTokenIdExtRefId.resource';

import { DatePipe } from '@angular/common';



@Component({
 selector: 'app-ds-token',
  templateUrl: './ds-token.component.html'
 , styleUrls: ['./ds-token.component.css']
})
export class DsTokenComponent implements OnInit {

private curdate;
private id;
private Groupid;
public message;

selectedRow : Number;
setClickedRow : Function;

    ngOnInit() 
    {
      this.doInit();
    }

doInit()
{
  this.searchModel.fromTime=this.curdate;

  this.searchToken() ;

  this.qmsservices.listDsCounterGroups()
  .then(data => this.counterGroups= data);

  this.qmsservices.listDsTokenStatus()
  .then(data => this.tokenStatus= data);
}
  constructor(private qmsservices : QMSServices ,
  public datepipe: DatePipe) 
{
    let d: Date = new Date();
    this.curdate=this.datepipe.transform(d,'yyyy-MM-dd');
    
    this.setClickedRow = function(index)
    {
      this.selectedRow = index;
    } 
 }
 
modelColl : DsTokenColl[] = [];
modelItem : DsTokenColl = new DsTokenColl();
searchModel : SearchDsToken =new SearchDsToken();
counterGroups : DsCounterGroup[] =[];   //array of countergroups items//
tokenStatus : DsTokenStatus[] =[];
changegroup:ParamTokenIdGroupId= new ParamTokenIdGroupId();
paramextrefitem:ParamTokenIdExtRefId= new ParamTokenIdExtRefId();


private retrieve() 
{
	this.qmsservices.listDsTokenColl()
  .then(data => this.modelColl= data);
  console.log(this.modelColl);
}

saveInfo()
{
  if (  isNaN (this.modelItem.tokenId ) )
  {
    this.qmsservices.createDsTokenColl (this.modelItem)	;	
  }
  else   
  {
    this.qmsservices.editDsTokenColl (this.modelItem)	;	
  }
    this.clearModel();
}

removeItem(data) 
{
  this.qmsservices.deleteDsToken( data.tokenId);
}; 

holdToken()
{
  this.qmsservices.holdWaitingToken(this.id);
};

unHoldToken()
{
  this.qmsservices.unHoldWaitingToken(this.id);
};

recallToken()
{
  
  this.qmsservices.reCallToken(this.id);
};

cancellToken()
{
  this.qmsservices.cancelDsToken(this.id);
};

uncancellToken()
{
  this.qmsservices.unCancelDsToken(this.id);
};

remind()
{
  this.qmsservices.remindDsToken(this.id);
};

changeTokenGroup()
{
  this.qmsservices.changeTokenGroup (this.changegroup)
  .then((response)=>
  {
    if(response==this.changegroup.tokenId)
    {
      this.counterGroups.forEach(element => 
      {
        if (this.changegroup.counterGroupId ==element.counterGroupId)
        {  
          alert('The countergroup changed to '+ element.counterGroupName+  'for'  + this.changegroup.tokenId +' Successfully')
        }   
         
      });
    }
  });
}

changePatientId()
{
  this.qmsservices.linkTokenExtRef (this.paramextrefitem)
  .then((response) => 
  {
    if(response==0)
    {
      alert('The token No: '+this.paramextrefitem.tokenId+' linked to: '+this.paramextrefitem.extRefId+' successfully');
    }
  });
}



editItem(data) 
{
  this.modelItem =data;
};

clearModel() 
{
  this.modelItem =new DsTokenColl() ;    
};

refresh()
{
  this.searchToken();
}

clearSearch()
{
  this.searchModel= new SearchDsToken();
};

searchToken() 
{
  console.log(this.searchModel);
  this.qmsservices.searchDsTokens(this.searchModel)
  .then(data => this.modelColl = data);
  console.log(this.modelColl)
};

selectedId(req) 
{
  this.id=req;
  this.changegroup.tokenId=req;
  this.paramextrefitem.tokenId=req;
};

selectedGroup(ser) 
{
 
  this.changegroup.counterGroupId=ser;
  
};

print(): void{ let printContents, popupWin;
  printContents = document.getElementById('printSection').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
     <html>
         <head>
             <title></title>
             <style>

             #token {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          
          #token td, #token th {
              border: 1px solid #ddd;
              padding: 8px;
          }
           #token th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              color: #7a4c41;
          }

      
             </style>
         </head>
         <body onload="window.print();window.close()">
         <h1><center>Token Details</center></h1>
       
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




		
	
