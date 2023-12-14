import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from 'src/app/model/Signup';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private service:UserService,private router:Router)
  {

  }

  signupProcess(obj:any)
  {
    console.log(obj.value);

   if(obj.value.password==obj.value.repassword)
   {
    let signupObj=new Signup()
    signupObj.name=obj.value.name;
    signupObj.username=obj.value.username;
    signupObj.email=obj.value.email;
    signupObj.password=obj.value.password;
    console.log(signupObj)
    this.service.registration(signupObj).subscribe(
      (response)=>
      {
        alert('Registration successfull!!');
        this.router.navigate(['login']);
      }
    );

  }

else
{
  alert('password and retype password must be same!!');
}
}
}