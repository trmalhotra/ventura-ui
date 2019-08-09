export class Opportunity {
  id: string;
  sfId: string;
  portfolio: string;
  clientOwner: string;
  programName: string;
  position: string;
  ltiPoc: string;
  recruitmentPoc: string;
  numberOfPositions: number;
  candidatesIdentified: number;
  positionStartDate: Date;
  dateCreated: Date;
  isActive: boolean;
  selected: boolean;
  profileIds: string[];
}
