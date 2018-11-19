import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CriteriaActions, CriteriaActionTypes } from './criteria-store.actions';
import { criteriaReducer } from './criteria-store.reducer';
import { Criteria, criteriaInitialState } from '../models/criteria.model';

@Injectable()
export class CriteriaStoreService {
  private state: Criteria = { ...criteriaInitialState };
  private agencies$ = new BehaviorSubject<any>(this.state.agencies);
  private statuses$ = new BehaviorSubject<any>(this.state.statuses);
  private missions$ = new BehaviorSubject<any>(this.state.missions);

  constructor() {}

  public select$ = (slice: CriteriaTypes) => {
    switch (slice) {
      case CriteriaTypes.agencies:
        return this.agencies$.asObservable();
      case CriteriaTypes.statuses:
        return this.statuses$.asObservable();
      case CriteriaTypes.missions:
        return this.missions$.asObservable();
    }
  }

  public selectSnapShot = (slice: CriteriaTypes) => {
    switch (slice) {
      case CriteriaTypes.agencies:
        return [...this.state.agencies];
      case CriteriaTypes.statuses:
        return [...this.state.statuses];
      case CriteriaTypes.missions:
        return [...this.state.missions];
    }
  }

  public dispatch = (action: CriteriaActions) => {
    this.state = criteriaReducer(this.state, action);
    switch (action.type) {
      case CriteriaActionTypes.GetAgencies:
        this.agencies$.next([...this.state.agencies]);
        break;
      case CriteriaActionTypes.GetStatuses:
        this.statuses$.next([...this.state.statuses]);
        break;
      case CriteriaActionTypes.GetMissions:
        this.missions$.next([...this.state.missions]);
        break;
    }
  }
}

export enum CriteriaTypes {
  agencies = 'agencies',
  statuses = 'statuses',
  missions = 'missions'
}

