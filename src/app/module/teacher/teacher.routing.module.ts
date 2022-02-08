import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherInfoComponent } from 'src/app/component/teacher/teacher-info/teacher-info.component';
import { TeacherLoginComponent } from 'src/app/component/teacher/teacher-login/teacher-login.component';
import { TeacherRegisterComponent } from 'src/app/component/teacher/teacher-register/teacher-register.component';

const routes: Routes = [
    {
        path: 'login',
        component: TeacherLoginComponent
    },
    {
        path: 'register',
        component: TeacherRegisterComponent
    },
    {
        path: 'info',
        component: TeacherInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TeacherRoutingModule { }
