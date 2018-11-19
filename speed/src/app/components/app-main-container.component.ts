import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/services/api.service';
import { Launch } from './../store/models/launch';
import { GetAgencies } from './../store/services/criteria-store.actions';

@Component({
    selector: 'app-main-container',
    templateUrl: './app-main-container.component.html',
    styleUrls: ['./app-filter.component.css']
})
export class ContainerFilterComponent implements OnInit {
    launches: Array<Launch>;
    items: Array<any>;
    searchCriteria: string;
    filterValueSelected: any;
    total: number;
    constructor(private service: ApiService) { }

    ngOnInit(): void {
        this.service.getAgencies();
        this.service.getStatuses();
        this.service.getMissions();
    }

    public LoadCombo(event) {
        this.searchCriteria = typeof(event) === 'string' ? event : event.target.value;
        this.service.filter(parseInt(this.searchCriteria, null)).subscribe((data) => {
            this.items = data;
        });
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
