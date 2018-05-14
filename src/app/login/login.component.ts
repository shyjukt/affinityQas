import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import * as AppUtils from '../common/app.utils';
import { ErpServices } from '../services/index';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	model: any = {};
	loading = false;
	returnUrl: string;
	error: string = '';
	public username: string = "";
	constructor(private http: Http, private _service: ErpServices, private route: ActivatedRoute,
		private router: Router) { }
	ngOnInit() {
		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	login() {
		if (!this.model.username) {
			this.error = AppUtils.USERNAME_EMPTY;
			return;
		}

		if (!this.model.password) {
			this.error = AppUtils.PASSWORD_EMPTY;
			return;
		}
		//COMMENTED BY SHYJU
		//event.preventDefault();
		let headers = AppUtils.contentHeaders;
		let body = { username: this.model.username, password: this.model.password };
		// if(this.model.username == "admin" && this.model.password === "123"){
		// 	localStorage.setItem(AppUtils.STORAGE_ACCOUNT_TOKEN, "token");
		// 	this.router.navigate([this.returnUrl]);
		// }else{
		// 	console.log("username:admin;password:123");
		// }
		return this.http.post(AppUtils.AUTHENTICATION_URL, body, { headers: headers })
			.subscribe(response => {
				console.log(response.json());
				if (response.json().code == 0) {
					console.log("ok");
					this.username = this.model.username;
					localStorage.setItem("access-token", response.json().token);
					console.log(localStorage.getItem(AppUtils.STORAGE_ACCOUNT_TOKEN))
					this.router.navigate([this.returnUrl]);
				} else {
					console.log(response.json().message);
					this.error=response.json().message;
				}
			},
			error => {
				console.log(error);
				if (error.message == "Unauthorized") {
					localStorage.removeItem('access-token');
					window.location.reload();
				}
			}
			);
	}

	isAuthenticated(): boolean {
		let token = localStorage.getItem(AppUtils.STORAGE_ACCOUNT_TOKEN);

		if (token) {
			// let jwtHelper: JwtHelper = new JwtHelper();
			// try{
			//   let parsedToken = jwtHelper.decodeToken(token);        
			//   if(parsedToken.exp*1000 - new Date().getTime() > 0){
			return true;
			//   } else {
			//     return false;         //Token Expired
			//   }
			// } catch (error){          
			//   return false;           //Decode Error - Invalid Token
			// }
		} else {
			return false;             //No Token
		}
	}

	logout() {
		localStorage.removeItem(AppUtils.STORAGE_ACCOUNT_TOKEN);
		window.location.reload();
	}
}



