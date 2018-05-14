import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { ErpServices,myService } from '../services/index';


@Component({

	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: []
})
export class HomeComponent implements OnInit {
	@ViewChild('autoShownModal') public autoShownModal: ModalDirective;
	public isModalShown: boolean = false;
	public authenticated: boolean;
	public menus = [];
	public menuItem;

	public tabs = [
		{ title: "Desktop", url: 'DeskTop' , active: true, id: 0, prevId: "", removable: false, customClass: "customClass" }
	];

	
	public UserName = null;
	public persCode=null;
	public processCode=[];
	public userProcess:any;
	public counter: number = 0;
	public showStyle: boolean = false;
	public isCollapsed: boolean = false;
	public homeTabSelect: boolean = true;
	public applicationLoading: boolean;
	public modelData = null;
	order = "createdDate";
	ascending = true;

	constructor(private _login: LoginComponent, private _service: ErpServices,private _eService:myService,private myService :myService) {
		this.showStyle = false;

	}
	ngOnInit() {

		this._service.getMenu()
			.subscribe(response => {
				console.log(response);
				this.menus = response;
			},
			error => {
				console.log(error);
				if (error.message == "Unauthorized") {
					localStorage.removeItem('access-token');
					window.location.reload();
				}

			})
		this._service.getSessionPerson()
			.subscribe(response => {
				console.log(response);
				this.UserName = response.printName;
				this.persCode=response.persCode;
				this._service.persInfo=response;
				
				
			},
			error => {
				console.log(error);
				if (error.message == "Unauthorized") {
					localStorage.removeItem('access-token');
					window.location.reload();
				}
			});

			this._service.getSessionProcesses()
			.subscribe(response => {
				
				console.log(response);
				this.userProcess=response;
				
				this._service._checkProcessExist(response);
		},
			error => {
				console.log(error);
				if (error.message == "Unauthorized") {
					localStorage.removeItem('access-token');
					window.location.reload();
				}
			});
			
			
	}
	applicationLoadingCheck() {
		if (this.menus.length == 0 || this.UserName == null ) {
			return true;
		} else {
			return false;
		}

	}
	addTab(data) {
		//this.menuItem=data;
		this.homeTabSelect = false;
		let id: number = this.counter + 1;
		let recentCheck: number = 0;
		let tabNumber: number = 0;
		for (let tab of this.tabs) {
			if (tab.prevId == data.menuId) {
				tabNumber = tab.id;
				//this._eService.sharedEventData=null;
                //console.log(this._eService.sharedEventData) 
				recentCheck++;
			}
		}
		if (recentCheck == 0) {

			this.tabs.push({ title: data.menuName, active: true, id: id, 
				prevId: data.menuId, removable: true, customClass: "customClass", url: data.moduleName });

			this.counter++;
			if(this._eService.sharedEventData!=undefined){
				this._eService.sharedEventData=null;
				console.log(this._eService.sharedEventData)
			}
			for (let i in this.tabs) {
				if (this.tabs[i].id == id) {
					this.tabs[i].active = true;
					this.menuItem=this.tabs[i];
					//console.log('selected '+this.menuItem);
				} else {
					this.tabs[i].active = false;
				}
			}
		}
		else {
			for (let j in this.tabs) {
				if (this.tabs[j].id == tabNumber) {
					this.tabs[j].active = true;
				} else {
					this.tabs[j].active = false;
				}
			}
		}

	};
	removeTabHandler(data1) {
		console.log(data1);
		for (let k in this.tabs) {
			if (this.tabs[k].id == data1.id) {
				this.tabs.splice(+k, 1);
			}
		}
		console.log(this.tabs);
	};

	openNav() {
		this.showStyle = !this.showStyle;
	}
	closeNav() {
		this.showStyle = false;
	}
	getSidenavStyle() {
		if (this.showStyle) {
			return "250px";
		} else {
			return "0";
		}
	}
	getMainStyle() {
		if (this.showStyle) {
			return "250px";
		} else {
			return "0";
		}
	}
	getToogle() {
		
		if (this.showStyle) {
			return "toggled";
		} else {
			return "toggled-2";
		}
	}
	tabSelect(tabData) {
		for (let j in this.tabs) {
			if (tabData.url == "home") {
				this.homeTabSelect = true;
			} else {
				this.homeTabSelect = false;
			}
			if (this.tabs[j].id == tabData.id) {
				this.tabs[j].active = true;
			} else {
				this.tabs[j].active = false;
			}
		}
	}
	logout() {
		this.authenticated = false;
		this._login.logout();
	}


	public showModal(itemData): void {
		this.modelData = null;
		this.modelData = itemData;
		this.isModalShown = true;
	}

	public hideModal(): void {
		this.autoShownModal.hide();
	}

	public onHidden(): void {
		this.isModalShown = false;
	}
}

