import {Injectable } from '@angular/core';
import { _PersInfo } from '../../resources/_PersInfo.resource';
import { _PersProcess } from '../../resources/_PersProcess.resource';
import { ErpServices } from '../../services';

@Injectable()
export class myService {
    

    ngOnInit() {

    }
    constructor(private _service: ErpServices) { }
    
    public sharedEventData : number;
    
    

    sendMessage(sharedEventData: number) {
        this.sharedEventData=sharedEventData;
    }
 
 
}
