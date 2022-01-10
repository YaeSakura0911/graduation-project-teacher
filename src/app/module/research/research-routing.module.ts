import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchDetailComponent } from 'src/app/component/research/research-detail/research-detail.component';

import { ResearchListComponent } from 'src/app/component/research/research-list/research-list.component';

const routes: Routes = [
    { path: '', component: ResearchListComponent },
    {
        path: 'detail',
        data: { breadcrumb: '研究详情' },
        component: ResearchDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResearchRoutingModule { }
