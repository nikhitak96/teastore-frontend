import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { StoreComponent } from './components/store/store.component';
import { FeaturesComponent } from './components/features/features.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { TeaproductComponent } from './components/teaproduct/teaproduct.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemViewComponent } from './components/item-view/item-view.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  
    StoreComponent,
    FeaturesComponent,
    BlogArticleComponent,
    ErrorPageComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ProductListComponent ,
    ProductUpdateComponent,
    TeaproductComponent,
  ProductViewComponent,
  ProductCreateComponent,
  FileUploadComponent,
  ItemCreateComponent,
  ItemListComponent,
  ItemUpdateComponent,
  ItemViewComponent,

 
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
