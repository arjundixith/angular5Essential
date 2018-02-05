import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
@Injectable()
export class logout {
  public loginStatus = 0; // 0 = not logged in, 1 = logged in
  constructor(public router : Router){}
  
  onLogout(){
    localStorage.removeItem("user");
    if(localStorage.getItem("user")==null){
      this.router.navigateByUrl('/login');
      
      return false;
    }
  
  }
}