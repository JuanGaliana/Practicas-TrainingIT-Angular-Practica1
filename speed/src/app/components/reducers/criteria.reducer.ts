import { CriteriaActions, CriteriaActionTypes } from './criteria.actions';


export interface CriteriaState {
  itemList: any;
  message?: string;
}

export const initialState: CriteriaState = {
  itemList: [],
  message: ''
};

export function reducer(state = initialState, action: CriteriaActions): CriteriaState {
  switch (action.type) {
  case CriteriaActionTypes.Agencies:
    return state;
  case CriteriaActionTypes.Statuses:
    return state;
  case CriteriaActionTypes.Missions:
    return state;
  case CriteriaActionTypes.OK:
    state.itemList = action.payload;
    return { ...state };
  case CriteriaActionTypes.KO:
    return { ...state, message: action.payload };
  default:
    return state;
  }
}
