import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentFormComponent } from '../student-form/student-form.component';

@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    @ViewChild('studentFormDrawer')
    studentFormDrawer: StudentFormComponent | undefined;

    constructor() { }

    ngOnInit(): void { }

    openStudentDrawer(): void {
        this.studentFormDrawer?.openDrawer();
    }

}
