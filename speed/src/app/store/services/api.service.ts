import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {}

    getAgencies$ = () => this.http.get(environment.url + '/assets/data/agencies.json');
    getStatuses$ = () => this.http.get(environment.url + '/assets/data/launchstatus.json');
    getMissions$ = () => this.http.get(environment.url + '/assets/data/missiontypes.json');

    public getLaunches = (): Observable<any[]> =>
        this.http
        .get(environment.url + '/assets/data/launches.json')
        .pipe(map((res: any) => res.launches))
}




