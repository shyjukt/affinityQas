import {QaEventStatusMast} from './QaEventStatusMast.resource';
import {QaEventDepartmentMast} from './QaEventDepartmentMast.resource';
import {QaEventLocationMast} from './QaEventLocationMast.resource';
import {QaCategoryMast} from './QaCategoryMast.resource';
import {QaSubCategoryMast} from './QaSubCategoryMast.resource';
import {QaEventWitnessesVew} from './QaEventWitnessesVew.resource';
import {QaEventMessagesVew} from './QaEventMessagesVew.resource';
import {QaEventUsersVew} from './QaEventUsersVew.resource';
import {QaEventParametersVew} from './QaEventParametersVew.resource';
export class QaEventsCollVew{
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
 qaEventStatusMast: QaEventStatusMast;
 qaEventDepartmentMast: QaEventDepartmentMast;
 qaEventLocationMast: QaEventLocationMast;
 qaCategoryMast: QaCategoryMast;
 qaSubCategoryMast: QaSubCategoryMast;
 qaEventWitnessesVew: QaEventWitnessesVew[];
 qaEventMessagesVew: QaEventMessagesVew[];
 qaEventUsersVew: QaEventUsersVew[];
 qaEventParametersVew: QaEventParametersVew[];
 public constructor() {}
}
	
  
