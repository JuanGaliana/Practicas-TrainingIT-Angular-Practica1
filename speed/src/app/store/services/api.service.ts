import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient) {
    }

    public filter(criteria: number): Observable<any[]> {
        if (criteria === 1) {
            return this.getAgencies();
        } else  if (criteria === 2) {
            return this.getStatuses();
        } else {
            return this.getMissions();
        }
    }
    public getAgencies = (): Observable<any[]> =>
        this.http
            .get(environment.url + '/assets/data/agencies.json')
            .pipe(map((res: any) => res.agencies))

    public getMissions = (): Observable<any[]> =>
        this.http
            .get(environment.url + '/assets/data/missiontypes.json')
            .pipe(map((res: any) => res.types))

    public getStatuses = (): Observable<any[]> =>
        this.http
        .get(environment.url + '/assets/data/launchstatus.json')
        .pipe(map((res: any) => res.types))

    public getLaunches = (): Observable<any[]> =>
        this.http
        .get(environment.url + '/assets/data/launches.json')
        .pipe(map((res: any) => res.launches))
}




