import {QaPersonalMast} from './QaPersonalMast.resource';
import {QaMessageTypeMast} from './QaMessageTypeMast.resource';
export class QaEventMessagesVew{
 entryTime: Date;
 msgType: string;
 msgDesc: string;
 entryUser: number;
 eventId: number;
 messageId: number;
 qaPersonalMast: QaPersonalMast;
 qaMessageTypeMast: QaMessageTypeMast;
 public constructor() {}
}
	
  
