import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from 'src/app/entity/student.entity';
import { StudentService } from 'src/app/service/student.service';

@Component({
    selector: 'app-student-detail',
    templateUrl: './student-detail.component.html',
    styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {

    drawerVisible: boolean = false;
    studentNo: string = "";
    studentName: string = "";
    studentYear: string = "";
    studentGender: string = "";
    studentTelephone: string = "";
    studentEmail: string = "";
    researchName: string = "";

    constructor(private studentService: StudentService) { }

    ngOnInit(): void { }

    // 查询学生
    queryStudent(studentId: number): void {
        this.studentService.queryStudent(studentId).subscribe(response => {
            console.log(response);
            if(response.code == 200) {
                this.studentNo = response.body.studentNo;
                this.studentName = response.body.studentName;
                this.studentYear = response.body.studentYear;
                this.studentGender = response.body.studentGender;
                this.studentTelephone = response.body.studentTelephone;
                this.studentEmail = response.body.studentEmail;
                this.researchName = response.body.researchName;
            }
        })
    }

    openDrawer(studentId: number): void {
        this.drawerVisible = true;
        this.queryStudent(studentId);
    }

    closeDrawer(): void {
        this.drawerVisible = false;
    }

}
