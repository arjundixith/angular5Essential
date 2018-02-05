import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router";
import { logout } from "../_services/logout.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public logout: logout) { }

  ngOnInit() {
    
  }

  onLogout(){
    this.logout.onLogout();
  }
  


}
