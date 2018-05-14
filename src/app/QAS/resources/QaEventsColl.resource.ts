import {QaEventMessages} from './QaEventMessages.resource';
import {QaEventUsers} from './QaEventUsers.resource';
import {QaEventWitnesses} from './QaEventWitnesses.resource';
import {QaEventParameters} from './QaEventParameters.resource';
export class QaEventsColl{
 createdTime: Date;
 eventTime: Date;
 eventNo: string;
 createdBy: number;
 eventStatus: number;
 eventDept: number;
 eventLocation: number;
 eventSubCategory: number;
 eventCategory: number;
 eventId: number;
 

qaEventMessages: QaEventMessages[];
qaEventUsers: QaEventUsers[];
 qaEventWitnesses: QaEventWitnesses[];
 qaEventParameters: QaEventParameters[]; 
 public constructor() {}
}
	
  
