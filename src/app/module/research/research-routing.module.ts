import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResearchListComponent } from 'src/app/component/research/research-list/research-list.component';
import { ResearchDetailComponent } from 'src/app/component/research/research-detail/research-detail.component';
import { ResearchAddComponent } from 'src/app/component/research/research-add/research-add.component';

const routes: Routes = [
    { path: '', component: ResearchListComponent },
    {
        path: 'detail/:researchId',
        data: { breadcrumb: '研究详情' },
        component: ResearchDetailComponent
    },
    {
        path: 'new',
        data: { breadcrumb: '创建研究' },
        component: ResearchAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResearchRoutingModule { }
