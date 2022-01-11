import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

    @ViewChild('taskFormDrawer')
    taskFormDrawer: TaskFormComponent | undefined;

    constructor() { }

    ngOnInit(): void { }

    openTaskDrawer(): void {
        this.taskFormDrawer?.openDrawer();
    }

}
