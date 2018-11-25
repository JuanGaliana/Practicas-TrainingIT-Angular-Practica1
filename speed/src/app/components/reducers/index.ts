import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromCriteria from './criteria.reducer';

export interface GlobalState {

  criteria: fromCriteria.CriteriaState;
}

export const reducers: ActionReducerMap<GlobalState> = {

  criteria: fromCriteria.reducer,
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
