import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from './../../store/services/api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CriteriaActionTypes, Agencies, OK, KO } from './criteria.actions';
import { of } from 'rxjs';


@Injectable()
export class CriteriaEffects {

  constructor(private actions$: Actions, private api: ApiService) {}

  @Effect()
  public agencies$  = this.actions$.ofType(CriteriaActionTypes.Agencies).pipe(
    mergeMap(() =>
      this.api.getAgencies$().pipe(
        map((res: any) => new OK(res.agencies)),
        catchError(err => of(new KO(err.message)))
      )
    )
  );

  @Effect()
  public statuses$ = this.actions$.ofType(CriteriaActionTypes.Statuses).pipe(
    mergeMap(() =>
      this.api.getStatuses$().pipe(
        map((res: any) => new OK(res.types)),
        catchError(err => of(new KO(err.message)))
      )
    )
  );

  @Effect()
  public missions$ = this.actions$.ofType(CriteriaActionTypes.Missions).pipe(
    mergeMap(() =>
      this.api.getMissions$().pipe(
        map((res: any) => new OK(res.types)),
        catchError(err => of(new KO(err.message)))
      )
    )
  );
}

