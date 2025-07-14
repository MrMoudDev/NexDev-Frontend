import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { Users } from './pages/private/users/users';
import { UsersNew } from './pages/private/users/users-new/users-new';
import { UsersEdit } from './pages/private/users/users-edit/users-edit';
import { Companies } from './pages/private/companies/companies';
import { CompanyNew } from './pages/private/companies/company-new/company-new';
import { CompanyEdit } from './pages/private/companies/company-edit/company-edit';

export const routes: Routes = [
    {path: 'home',component: Home},
    {path: 'login',component: Login},
    {path: 'register',component: Register},
    {path: 'admin/users',component: Users},
    {path: 'admin/companies',component: Companies},
    {path: 'admin/users/new',component: UsersNew},
    {path: 'admin/users/edit',component: UsersEdit},
    {path: 'admin/companies/new',component: CompanyNew},
    {path: 'admin/companies/edit/:id',component: CompanyEdit},
    {path: '**', redirectTo:"home", pathMatch: "full"},
    {path: '', redirectTo:"home", pathMatch: "full"},
];
