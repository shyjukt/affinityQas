import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Router, NavigationStart } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginComponent]

})
export class AppComponent implements OnInit {

	public authenticated: boolean;

	constructor(private router: Router, private _loginComponent: LoginComponent) {

		router.events.subscribe(e => {
			if (e instanceof NavigationStart) {
				if (e.url === '/login') {
					console.log(_loginComponent.isAuthenticated());
					if (!_loginComponent.isAuthenticated()) {
						this.authenticated = false;
					} else {
						this.authenticated = true;
						router.navigate(['/home']);
					}
				} if (e.url === '/home') {
					console.log(_loginComponent.isAuthenticated());
					if (!_loginComponent.isAuthenticated()) {
						this.authenticated = false;
						router.navigate(['/login']);
					} else {
						this.authenticated = true;
					}
				}
			}
		});
	}
	ngOnInit() {
		if (!this._loginComponent.isAuthenticated()) {
			this.authenticated = false;
		} else {
			this.authenticated = true;
		}
	}

	logout() {
		this.authenticated = false;
		this._loginComponent.logout();
	}
	isAuthenticated() {
		if (!this._loginComponent.isAuthenticated()) {
			this.authenticated = false;
		} else {
			this.authenticated = true;
		}
		return this.authenticated;
	}
}