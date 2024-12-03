import { Routes } from '@angular/router';
import {AdminComponent} from './pages/admin/admin.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {UserComponent} from './pages/user/user.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';

export const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},
  {path: 'reg', component: RegisterPageComponent}
];

