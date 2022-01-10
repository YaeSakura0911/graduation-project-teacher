import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailComponent } from 'src/app/component/task/task-detail/task-detail.component';

const routes: Routes = [
    {
        path: 'detail',
        data: { breadcrumb: '任务详情' },
        component: TaskDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
