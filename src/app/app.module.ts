import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CollapseModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';
import { MyDatePickerModule } from 'mydatepicker';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app-routes';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guards/index';
import { ErpServices, QASServices } from './services/index';

import { LoginComponent } from './login/login.component';
import { QASServicesObservable } from './services/index';
import { HomeComponent } from './home/home.component';
import { DesktopComponent } from './desktop/desktop.component';


import { DatePipe } from '@angular/common';

import { QaNewEventComponent } from './QAS/qa-new-event/qa-new-event.component';
import { QaEventListComponent } from './QAS/qa-event-list/qa-event-list.component';
import { QaCategoryComponent } from './QAS/qa-category/qa-category.component';
import { QaSubCategoryComponent } from './QAS/qa-sub-category/qa-sub-category.component';
import { QaCategoryUsersComponent } from './QAS/qa-category-users/qa-category-users.component';
import { QaLocationUsersComponent } from './QAS/qa-location-users/qa-location-users.component';


import { myService } from 'app/QAS/services/QaEventDetails.Services';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DesktopComponent
   
    , QaNewEventComponent
    , QaEventListComponent
    
    , QaCategoryComponent
    , QaSubCategoryComponent
    , QaCategoryUsersComponent
    , QaLocationUsersComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MyDatePickerModule,
    routing,
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    AccordionModule.forRoot()

  ],
  providers: [
    AuthGuard,
    ErpServices
    , 
    QASServices,
    DatePipe,
    QASServicesObservable,
    myService
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }

