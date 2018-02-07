import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 import { ExpenseCrudComponent } from './expense_track/expense-crud/expense-crud.component'
 import { CreateUserComponent } from './expense_track/create-user/create-user.component'
const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'dashboard', component: DashboardComponent },  
  { path: 'login', component: LoginComponent }, 
  { path: 'expense_crud', component: ExpenseCrudComponent }, 
  { path: 'create_user', component: CreateUserComponent}, 
  { path: 'create_user/:name', component: CreateUserComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
