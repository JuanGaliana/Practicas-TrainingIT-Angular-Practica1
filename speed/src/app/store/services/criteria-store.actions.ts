export enum CriteriaActionTypes {
    GetAgencies = 'Agencies',
    GetStatuses = 'Statuses',
    GetMissions = 'Missions'
  }

  export interface ICriteriaAction {
    readonly type: CriteriaActionTypes;
    readonly payload: any;
  }

  export class GetAgencies implements ICriteriaAction {
    public readonly type = CriteriaActionTypes.GetAgencies;
    constructor(public readonly payload: any[]) {}
  }

  export class GetStatuses implements ICriteriaAction {
    public readonly type = CriteriaActionTypes.GetStatuses;
    constructor(public readonly payload: any[]) {}
  }

  export class GetMissions implements ICriteriaAction {
    public readonly type = CriteriaActionTypes.GetMissions;
    constructor(public readonly payload: any[]) {}
  }

  export type CriteriaActions = GetAgencies | GetStatuses | GetMissions;
