import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StoreComponent } from './components/store/store.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './components/auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { TeaproductComponent } from './components/teaproduct/teaproduct.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemViewComponent } from './components/item-view/item-view.component';



const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'home', component:HomeComponent}, 
  //{path:'header',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'blog-article',component:BlogArticleComponent},
  {path:'contact',component:ContactComponent},
  {path:'features',component:FeaturesComponent},
  //{path:'footer',component:FooterComponent},
  //{path:'navbar',component:NavbarComponent},
  {path:'Signup', component:RegistrationComponent},
  {path:'login', component:LoginComponent},
  {path:'store',component:StoreComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[authGuard]},
  {path:'teaproduct',component:TeaproductComponent},
  {path:'products',component:ProductListComponent},
  {path:'add-product',component:ProductCreateComponent},
  {path:'update-product/:id',component:ProductUpdateComponent},
  {path:'view-product/:id',component:ProductViewComponent},

  {path:'items',component:ItemListComponent},
  {path:'add-item',component:ItemCreateComponent},
  {path:'update-item/:id',component:ItemUpdateComponent},
  {path:'view-item/:id',component:ItemViewComponent},
  {path:'**',component:ErrorPageComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
