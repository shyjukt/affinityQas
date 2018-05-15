import { Headers } from '@angular/http';

//Headers HTTP
export const HEADER_AUTHENTICATION: string = 'Authorization';

//Local storage key
export const STORAGE_ACCOUNT_TOKEN: string = 'access-token';

export const contentHeaders = new Headers();
contentHeaders.append('Content-Type', 'application/json');
export const menuHeaders = new Headers();


//System Id of NEHR Application
export const SYSTEM_ID: number = 1;


//User messages
export const USERNAME_EMPTY: string = 'Username cannot be empty';
export const PASSWORD_EMPTY: string = 'Password cannot be empty';
export const INVALID_CREDENTIALS: string = 'Invalid Credentials!';
export const SESSION_EXPIRED: string = 'Session timed out';
export const INVALID_TOKEN: string = 'Invalid Token';

//Common http root api
//export const BACKEND_API_URL:string = 'http://cvt-affinityapi.7e14.starter-us-west-2.openshiftapps.com/';

//export const BACKEND_API_URL:string = 'http://localhost:8091/';
export const BACKEND_API_URL:string = 'http://172.16.60.100:8091/';

// export const BACKEND_API_URL:string = 'http://afnitynahla.ddns.net:8088/cvt/';
//export const BACKEND_API_URL:string = 'http://192.168.1.101:8091/';
//export const BACKEND_API_URL: string = 'http://192.168.1.10:8091/cvt/';

export const AUTHENTICATION_URL: string = BACKEND_API_URL + 'auth';
export const MENU_URL = BACKEND_API_URL + 'listUserMenus';
export const SESSION_PERSON = BACKEND_API_URL + 'getSessionPerson';
export const LIST_SESSION_PROCESSES = BACKEND_API_URL + 'listSessionProcesses';


export const AVATAR_LOCATION: string = 'assets/images/avatar.jpg';

export const PAGESIZE_MINIMIZED: number = 4;              //No.of items in table when in minimized state
export const PAGESIZE_MAXIMIZED: number = 15;             //No.of items in table when in minimized state
export const PAGE_INDEX_SIZE_MINIMIZED: number = 5;       //No.of the pages displaying before ... button in pagination bar
export const PAGE_INDEX_SIZE_MAXIMIZED: number = 8;       //No.of the pages displaying before ... button in pagination bar