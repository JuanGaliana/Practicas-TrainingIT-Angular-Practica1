import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CriteriaTypes, CriteriaStoreService } from './criteria-store.service';
import { GetAgencies, GetStatuses, GetMissions } from './criteria-store.actions';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private service: CriteriaStoreService) {
    }

    public filter(criteria: number): Observable<any[]> {
        if (criteria === 1) {
            return this.service.select$(CriteriaTypes.agencies);
        } else  if (criteria === 2) {
            return this.service.select$(CriteriaTypes.statuses);
        } else {
            return this.service.select$(CriteriaTypes.missions);
        }
    }

    public getAgencies = () => {
        const agencies = localStorage.getItem(CriteriaTypes.agencies);
        if (agencies) {
         this.service.dispatch(new GetAgencies(JSON.parse(agencies)));
        } else {
        this.http
            .get(environment.url + '/assets/data/agencies.json')
            .pipe(map((res: any) => res.agencies))
            .subscribe(a => {
                localStorage.setItem(CriteriaTypes.agencies, JSON.stringify(a));
                this.service.dispatch(new GetAgencies(a));
            });
        }
    }

    public getMissions = () => {
        const missions = localStorage.getItem(CriteriaTypes.missions);
        if (missions) {
         this.service.dispatch(new GetMissions(JSON.parse(missions)));
        } else {
        this.http
            .get(environment.url + '/assets/data/missiontypes.json')
            .pipe(map((res: any) => res.types))
            .subscribe(m => {
                localStorage.setItem(CriteriaTypes.missions, JSON.stringify(m));
                this.service.dispatch(new GetAgencies(m));
            });
        }
    }

    public getStatuses = () => {
        const statuses = localStorage.getItem(CriteriaTypes.statuses);
        if (statuses) {
         this.service.dispatch(new GetStatuses(JSON.parse(statuses)));
        } else {
        this.http
            .get(environment.url + '/assets/data/launchstatus.json')
            .pipe(map((res: any) => res.types))
            .subscribe(s => {
                localStorage.setItem(CriteriaTypes.statuses, JSON.stringify(s));
                this.service.dispatch(new GetAgencies(s));
            });
        }
    }

    public getLaunches = (): Observable<any[]> =>
        this.http
        .get(environment.url + '/assets/data/launches.json')
        .pipe(map((res: any) => res.launches))
}




