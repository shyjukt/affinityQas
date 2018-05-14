import {QaPersonalMast} from './QaPersonalMast.resource';
import {QaEventUserTypeMast} from './QaEventUserTypeMast.resource';
export class QaEventUsersVew{
 accessedTime: Date;
 addedTime: Date;
 activeFlag: string;
 disposeFlag: string;
 userType: string;
 msgId: number;
 addedBy: number;
 accessType: number;
 persCode: number;
 eventId: number;
 eventUserId: number;
 qaPersonalMast: QaPersonalMast;
 qaEventUserTypeMast: QaEventUserTypeMast;
 public constructor() {}
}
	
  
