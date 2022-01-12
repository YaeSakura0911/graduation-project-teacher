import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from 'src/app/component/user/user-info/user-info.component';
import { UserLoginComponent } from 'src/app/component/user/user-login/user-login.component';
import { UserSignupComponent } from 'src/app/component/user/user-signup/user-signup.component';

const routes: Routes = [
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'signup',
        component: UserSignupComponent
    },
    {
        path: 'info',
        component: UserInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }
