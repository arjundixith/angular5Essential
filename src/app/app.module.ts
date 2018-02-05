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
import { HttpModule } from '@angular/http';


import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ExpenseCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // Including the ReactiveFormsModule in our application
    ReactiveFormsModule,
    DataTablesModule,
    HttpModule
  ],
  providers: [logout],
  bootstrap: [AppComponent]
})
export class AppModule { }
