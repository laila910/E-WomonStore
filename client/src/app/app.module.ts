import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { AddtocardComponent } from './pages/addtocard/addtocard.component';

import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { CategoryComponent } from './pages/category/category.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';


import { FeaturedComponent } from './shared/featured/featured.component';
import { RecentComponent } from './shared/recent/recent.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';
import { HeaderComponent } from './shared/header/header.component';
import { LogOutComponent } from './pages/log-out/log-out.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    AddtocardComponent,

    ContactComponent,
    RegisterComponent,
    LoginComponent,
    MyprofileComponent,
    CategoryComponent,
    NavbarComponent,
    FooterComponent,
    SearchbarComponent,

    FeaturedComponent,
    RecentComponent,
    AdminComponent,
    SupplierComponent,
    HeaderComponent,
    LogOutComponent
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
