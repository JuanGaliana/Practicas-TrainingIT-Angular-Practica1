import { CriteriaActions, CriteriaActionTypes } from './criteria-store.actions';
import { Criteria, criteriaInitialState } from '../../models/criteria.model';

export function criteriaReducer(
  state = criteriaInitialState,
  action: CriteriaActions
): Criteria {
  const result = { ...state };
  switch (action.type) {
    case CriteriaActionTypes.GetAgencies:
      result.agencies = action.payload;
      break;
    case CriteriaActionTypes.GetStatuses:
      result.statuses = action.payload;
      break;
    case CriteriaActionTypes.GetMissions:
      result.missions = action.payload;
      break;
  }
  return result;
}
