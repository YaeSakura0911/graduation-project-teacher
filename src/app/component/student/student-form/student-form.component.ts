import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

    drawerVisible: boolean = false;

    constructor() { }

    ngOnInit(): void { }

    openDrawer(): void {
        this.drawerVisible = true;
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}
