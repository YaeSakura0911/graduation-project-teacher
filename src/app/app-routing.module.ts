import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./module/teacher/teacher.module').then(m => m.TeacherModule)
    },
    {
        path: 'research',
        canActivate: [AuthGuard],
        data: { breadcrumb: '研究列表' },
        loadChildren: () => import('./module/research/research.module').then(m => m.ResearchModule)
    },
    {
        path: 'task',
        canActivate: [AuthGuard],
        data: { breadcrumb: '任务列表' },
        loadChildren: () => import('./module/task/task.module').then(m => m.TaskModule)
    },
    {
        path: 'student',
        canActivate: [AuthGuard],
        data: { breadcrumb: '学生列表' },
        loadChildren: () => import('./module/student/student.module').then(m => m.StudentModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
