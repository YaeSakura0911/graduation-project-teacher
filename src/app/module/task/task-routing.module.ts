import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TaskCompleteComponent} from "../../component/task/task-complete/task-complete.component";
import {TaskListComponent} from 'src/app/component/task/task-list/task-list.component';

const routes: Routes = [
    {
        path: '',
        component: TaskListComponent
    },
    {
        path: 'complete',
        data: {breadcrumb: '完成情况'},
        component: TaskCompleteComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule {
}
