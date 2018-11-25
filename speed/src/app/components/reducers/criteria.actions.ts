import { Action } from '@ngrx/store';

export enum CriteriaActionTypes {
  Agencies = '[Criteria] Agencies',
  Statuses = '[Criteria] Statuses',
  Missions = '[Criteria] Missions',
  OK = '[Criteria] OK',
  KO = '[Criteria] KO'
}

export class Agencies implements Action {
  readonly type = CriteriaActionTypes.Agencies;
  // constructor(readonly payload: any) {}
}

export class Statuses implements Action {
  readonly type = CriteriaActionTypes.Statuses;
  // constructor(readonly payload: any) {}
}

export class Missions implements Action {
  readonly type = CriteriaActionTypes.Missions;
  // constructor(readonly payload: any) {}
}

export class OK implements Action {
  readonly type = CriteriaActionTypes.OK;
  constructor(readonly payload: any) {}
}

export class KO implements Action {
  readonly type = CriteriaActionTypes.KO;
  constructor(readonly payload: any) {}
}

export type CriteriaActions = Agencies | Statuses | Missions | OK | KO;
