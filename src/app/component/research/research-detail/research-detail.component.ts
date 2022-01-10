import { Component, OnInit } from '@angular/core';

import { formatDistance } from 'date-fns';

@Component({
    selector: 'app-research-detail',
    templateUrl: './research-detail.component.html',
    styleUrls: ['./research-detail.component.scss']
})
export class ResearchDetailComponent implements OnInit {

    time = formatDistance(new Date(), new Date);

    constructor() { }

    ngOnInit(): void {
    }

}
