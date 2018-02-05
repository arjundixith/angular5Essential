import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule,Validators,FormGroup,FormBuilder} from '@angular/forms';
import {Router,NavigationStart} from "@angular/router";
import 'rxjs/add/operator/filter'

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
  ngOnInit() {
    // this.checkAuth();
  }

   onLogin(loginData){
       if(loginData.uname=="arjun" && loginData.psw=="arjun@123"){
        localStorage.setItem("user", loginData);
         this.router.navigate(['/dashboard']);
         return true;
       }
       return false;
  }

  checkAuth(){
    debugger;
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        if(localStorage.getItem("user")==null){
          this.router.navigate(['/login']);
        }
      }
      
    });
  }

}
