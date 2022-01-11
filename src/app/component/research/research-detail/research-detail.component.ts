import { Component, OnInit, ViewChild } from '@angular/core';

import { formatDistance } from 'date-fns';
import { StudentFormComponent } from '../../student/student-form/student-form.component';
import { TaskFormComponent } from '../../task/task-form/task-form.component';

@Component({
    selector: 'app-research-detail',
    templateUrl: './research-detail.component.html',
    styleUrls: ['./research-detail.component.scss']
})
export class ResearchDetailComponent implements OnInit {
    
    time:string = formatDistance(new Date(), new Date);
    @ViewChild('taskDrawer')
    taskDrawer: TaskFormComponent | undefined;
    @ViewChild('studentDrawer')
    studentDrawer: StudentFormComponent | undefined;

    constructor() { }

    ngOnInit(): void { }

    openTaskDrawer(): void {
        this.taskDrawer?.openDrawer();
    }

    openStudentDrawer(): void {
        this.studentDrawer?.openDrawer();
    }

}
