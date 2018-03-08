import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {logout} from './_services/logout.service';
import { ExpenseCrudComponent } from './expense_track/expense-crud/expense-crud.component'
import { DataTablesModule } from 'angular-datatables';
import { HttpModule,JsonpModule  } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { CreateUserComponent } from './expense_track/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ExpenseCrudComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    DataTablesModule,
    HttpModule,
    JsonpModule ,
    NgbModule.forRoot()
  ],
  providers: [logout],
  bootstrap: [AppComponent]
})
export class AppModule { }
