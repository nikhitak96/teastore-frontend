import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  loginstatus:any;
   constructor(private router:Router, public userService:UserService){

   }
  ngOnInit(): void {
   
  }
  logout()
  {
    sessionStorage.removeItem("login");
    this.userService.isLoggedIn.next(false);
    alert("you have successfully logged out!");
    this.router.navigate(['login'])
  }

  
}
