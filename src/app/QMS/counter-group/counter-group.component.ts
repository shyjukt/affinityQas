import { Component, OnInit } from '@angular/core';
import { QMSServices } from 'app/services/index';
import { DsCounterGroup } from 'app/QMS/resources/dsCounterGroup.resource';


@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html'
  //,styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {
 

  Counterinfo: DsCounterGroup[] = [];
  model : DsCounterGroup =new DsCounterGroup() ;

  searchModel : DsCounterGroup =new DsCounterGroup() ;
  
  constructor(private QMSServices: QMSServices) { }

  ngOnInit() {
    this.retrieveDsCounterGroup();
    this.model.activeYn = 'Y';
    this.searchModel.activeYn = 'Y';
  }
	private retrieveDsCounterGroup() {
    
        this.QMSServices.listDsCounterGroups().then(data => this.Counterinfo = data);
      }
      saveInfo() {
        if (  isNaN (this.model.counterGroupId) )
        {
           this.QMSServices.createDsCounterGroup(this.model)	;	
          
        }
        else   
        {
           this.QMSServices.editDsCounterGroup(this.model)	;
           
           	
        }
        this.clearModel();
       
       }
       
        /* removeItem function delete select row index record*/
         removeItem(data) {
           console.log("***********************************removing***********************************");
           this.QMSServices.deleteDsCounterGroup(data.counterGroupId)	;	
       
         };
       
         editItem(data) {
            this.model.counterGroupId=data.counterGroupId;
            this.model.counterGroupName=data.counterGroupName; 
            this.model.shortName=data.shortName;
            this.model.activeYn=data.activeYn; 
            this.model.groupNameNl=data.groupNameNl;
               
         };
       
         clearModel() {
           this.model.counterGroupId=null;
           this.model.counterGroupName=null;
           this.model.shortName=null;
           this.model.activeYn='Y'; 
           this.model.groupNameNl=null;

         };
         refresh(){
          this.retrieveDsCounterGroup();
        };
        

        clearSearch() {
          this.searchModel.counterGroupName = null;
          this.searchModel.activeYn =null;
        };
       
        searchItem() {
          console.log(this.searchModel)
          this.QMSServices.searchDsCounterGroups(this.searchModel)
          .then(data => this.Counterinfo = data);
      
        };
    
        
print(): void{ let printContents, popupWin;
  printContents = document.getElementById('printSectionservice').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
     <html>
         <head>
             <title></title>
             <style>

             #service {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          
          #service td, #service th {
              border: 1px solid #ddd;
              padding: 8px;
          }
           #service th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              color: #7a4c41;
          }

          
            
             </style>
         </head>
         <body onload="window.print();window.close()">
         <h1><center>Counter Service Details</center></h1>
         
         ${printContents}
        
         </body>
     </html>`
  );
  popupWin.document.close();

  //window.print();
};
       
}
