import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/services/api.service';
import { Launch } from './../store/models/launch';
import { Store } from '@ngrx/store';
import { Agencies, Statuses, Missions } from './reducers/criteria.actions';
import { GlobalState } from './reducers';

@Component({
    selector: 'app-main-container',
    templateUrl: './app-main-container.component.html',
    styleUrls: ['./app-filter.component.css']
})
export class ContainerFilterComponent implements OnInit {
    launches: Array<Launch>;
    item: { itemList: any };
    searchCriteria: string;
    filterValueSelected: any;
    total: number;
    constructor(private service: ApiService, private store: Store<GlobalState>) { }

    ngOnInit(): void {
        this.store.select(s => s.criteria).subscribe(value => {
            console.log('ngOnInit.select.Car: ', value);
            this.item = value;
          });
    }
    // public filter(criteria: number): Observable<any[]> {
    public LoadCombo(event) {
        const criteria = typeof (event) === 'string' ? event : event.target.value;
        if (criteria === '1') {
            this.store.dispatch(new Agencies());
        } else if (criteria === '2') {
            this.store.dispatch(new Statuses());
        } else {
            this.store.dispatch(new Missions());
        }
    }

    onChange(event): void {
        this.filterValueSelected = event;
    }

    onSearch(): void {
        const search = parseInt(this.filterValueSelected.target.value, null);
        this.service.getLaunches().subscribe((data) => {
            const dataFiltered = this.FilterData(data, search);
            this.launches = dataFiltered;
        });
    }

    private FilterData(data: Array<Launch>, search: number): Array<Launch> {
        let dataFiltered: Array<Launch> = new Array<Launch>();
        if (this.searchCriteria === '1') {
            dataFiltered = data.filter(l => l.lsp && l.lsp.id === search);
            const dataRocketFiltered = [];
            data.forEach((l) => {
                if (l.rocket && l.rocket.agencies) {
                    l.rocket.agencies.forEach((a) => {
                        if (a.id === search) {
                            dataRocketFiltered.push(l);
                        }
                    });
                }
            });
            dataFiltered = dataFiltered.concat(dataRocketFiltered);
            const dataMissionsFiltered = [];
            data.forEach((l) => {
                if (l.missions) {
                    l.missions.forEach((m) => {
                        if (m.agencies) {
                            m.agencies.forEach((a) => {
                                if (a.id === search) {
                                    dataMissionsFiltered.push(l);
                                }
                            });
                        }
                    });
                }
            });
            dataFiltered = dataFiltered.concat(dataMissionsFiltered);
        } else if (this.searchCriteria === '2') {
            dataFiltered = data.filter(l => l.status === search);
        } else {
            // const dataMissionsFiltered = [];
            data.forEach((l) => {
                if (l.missions) {
                    l.missions.forEach((m) => {
                        if (m.type === search) {
                            dataFiltered.push(l);
                        }
                    });
                }
            });
            // dataFiltered = dataFiltered.concat(dataMissionsFiltered);
        }
        this.total = dataFiltered.length;
        return dataFiltered;
    }
}
