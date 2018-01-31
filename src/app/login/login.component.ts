import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,Validators,FormGroup,FormBuilder} from '@angular/forms';
import {Router} from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder,private router: Router){
    this.form = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'uname' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
    
      'psw' : [null, Validators.required],
    
    });
  }
  ngOnInit() {}

   onLogin(loginData){
       if(loginData.uname=="arjun" && loginData.psw=="arjun@123"){
         alert("success");
         this.router.navigate(['/dashboard']);
         
       }else{
         alert("please enter correct user name and password")
       }
  }

}
