import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router=new Router()
  if(sessionStorage.getItem('login')=="true")
 { 
  return true;
 }else{
  alert("please login to continue!");
  router.navigate(['login'])
  return false;
}
 
};
