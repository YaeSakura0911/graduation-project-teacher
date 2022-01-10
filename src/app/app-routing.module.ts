import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'user',
        loadChildren: () => import('./module/user/user.module').then(m => m.UserModule)
    },
    {
        path: 'research',
        data: { breadcrumb: '研究列表' },
        loadChildren: () => import('./module/research/research.module').then(m => m.ResearchModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
