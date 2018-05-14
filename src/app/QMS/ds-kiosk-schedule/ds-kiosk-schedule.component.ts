import { Component, OnInit } from '@angular/core';
import { QMSServices } from 'app/services/index';
import { DsKioskSchedule } from 'app/QMS/resources/DsKioskSchedule.resource';

@Component({
  selector: 'app-ds-kiosk-schedule',
  templateUrl: './ds-kiosk-schedule.component.html',
  styleUrls: ['./ds-kiosk-schedule.component.css']
})
export class DsKioskScheduleComponent implements OnInit {

  
  days=['SUN','MON','TUE','WED','THU','FRI','SAT'];
  selectedRow: Number;
  constructor(private qmsservices : QMSServices) { }

  ngOnInit() { 
    this.doInit();
  }



  doInit()
{

  this.retrieve() ;

}
kioskSheduleColl:DsKioskSchedule[]=[];
kioskSheduleItem:DsKioskSchedule=new DsKioskSchedule;
createkioskSheduleItem:DsKioskSchedule=new DsKioskSchedule;
  
private retrieve() 
{
	this.qmsservices.listDsKioskSchedule()
  .then(data => this.kioskSheduleColl= data);
  
}
selectedShedule(req) {
  this.kioskSheduleItem = req;
  this.selectedRow=req;
};
refresh(){
  this.retrieve();
}
editSchedule()
{
  if(this.createkioskSheduleItem.fromTime<0 || this.createkioskSheduleItem.fromTime>24  ){
    alert('Enter from time between 0 and 24');
   }
   else if(this.createkioskSheduleItem.toTime<0 || this.createkioskSheduleItem.toTime>24){
    alert('Enter to time between 0 and 24');
   }
   else{

 
  this.qmsservices.editDsKioskSchedule(this.kioskSheduleItem)
  .then
   ((response) => 
   {
    alert('The Kiosk Shedule edited'); 
     this.refresh();
     this.kioskSheduleItem=new DsKioskSchedule();
   });
  }
  }

  createShedule(){
    if (isNaN(this.createkioskSheduleItem.scheduleId)) {
     if(this.createkioskSheduleItem.fromTime<0 || this.createkioskSheduleItem.fromTime>24  ){
      alert('Enter from time between 0 and 24');
     }
     else if(this.createkioskSheduleItem.toTime<0 || this.createkioskSheduleItem.toTime>24){
      alert('Enter to time between 0 and 24');
     }
     else
{
      this.qmsservices.createDsKioskSchedule(this.createkioskSheduleItem)
      .then
       ((response) => 
       {
        var alertify = require('alertifyjs');
        alertify.success('Kiosk Shedule Saved Successfully');
         this.refresh();

         this.createkioskSheduleItem=new DsKioskSchedule();
       });
      }
    }
  }

  deleteShedule(){
    
    if(confirm("Are you sure to delete ")){
     this.qmsservices.deleteDsKioskSchedule(this.kioskSheduleItem.scheduleId)
     .then
     ((response) => {
       this.refresh();
      
       alert('The Kiosk Schedule deleted sucessfully');
     });
         
     
  }
}

print(): void{ let printContents, popupWin;
  printContents = document.getElementById('Kiosk-Schedule').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
     <html>
         <head>
             <title></title>
             <style>

             #Kiosk-Schedule {
              font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
              border-collapse: collapse;
              width: 100%;
          }
          
          #Kiosk-Schedule td, #Kiosk-Schedule th {
              border: 1px solid #ddd;
              padding: 8px;
          }
           #Kiosk-Schedule th {
              padding-top: 12px;
              padding-bottom: 12px;
              text-align: left;
              color: #7a4c41;
          }

      
             </style>
         </head>
         <body onload="window.print();window.close()">
         <h1><center>Kiosk Shedule Report</center></h1>
       
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
        sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("Kiosk-Schedule");
        switching = true;
        //Set the sorting direction to ascending:
        dir = "asc"; 
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.getElementsByTagName("TR");
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch= true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            //Each time a switch is done, increase this count by 1:
            switchcount ++;      
          } else {
            /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
      }
       
}
