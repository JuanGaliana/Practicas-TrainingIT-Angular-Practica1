import { Component, OnInit } from '@angular/core';
import { ApiService } from '../store/services/api.service';
import { Launch } from './../store/models/launch';
import { Rocket } from './../store/models/rocket';

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

    ngOnInit(): void { }

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
        let dataFiltered: Array<Launch>;
        if (this.searchCriteria === '1') {
            dataFiltered = data.filter(l => (l.lsp && l.lsp.id === search)
            || (l.rocket && l.rocket.agencies && l.rocket.agencies.length > 0 && l.rocket.agencies.filter(m => m.id === search)));
        } else if (this.searchCriteria === '2') {
            dataFiltered = data.filter(l => l.status === search);
        } else {
            dataFiltered = data.filter(l => l.missions && l.missions.length > 0 && l.missions.filter(m => m.id === search));
        }
        this.total = dataFiltered.length;
        return dataFiltered;
    }
}
