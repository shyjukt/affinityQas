import {DsCounterTokenLinkColl} from './DsCounterTokenLinkColl.resource';
import {DsCounterGroup} from './DsCounterGroup.resource';
import {DsTokenStatus} from './DsTokenStatus.resource';
export class DsTokenColl{
 generatedTime: Date;
 tokenLang: string;
 extRefDisplayName: string;
 extRefId: string;
 tokenNo: string;
 entryFlag: number;
 counterId: number;
 tokenSequence: number;
 prevTokenId: number;
 tokenStatus: number;
 counterGroupId: number;
 tokenId: number;
 dsCounterTokenLinkColl: DsCounterTokenLinkColl[];
 dsCounterGroup: DsCounterGroup;
 dsTokenStatus: DsTokenStatus;
 public constructor() {}
}
	
  
