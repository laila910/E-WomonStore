import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';


import { FeaturedComponent } from './shared/featured/featured.component';

import { AdminComponent } from './dashboard/admin/admin.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';
import { HeaderComponent } from './shared/header/header.component';

import { UserInterceptor } from './providers/user.interceptor';
import { AddAddressComponent } from './pages/add-address/add-address.component';
import { AddImageComponent } from './pages/add-image/add-image.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { AddCatComponent } from './pages/add-cat/add-cat.component';
import { AddBrandComponent } from './pages/add-brand/add-brand.component';
import { AddSizesComponent } from './pages/add-sizes/add-sizes.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { AddColorsComponent } from './pages/add-colors/add-colors.component';
import { AddPImagesComponent } from './pages/add-pimages/add-pimages.component';
import { AddReviewComponent } from './pages/add-review/add-review.component';
import { Err404Component } from './pages/err404/err404.component';
import { LogoutComponent } from './pages/logout/logout.component';

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

    NavbarComponent,
    FooterComponent,
    SearchbarComponent,

    FeaturedComponent,

    AdminComponent,
    SupplierComponent,
    HeaderComponent,

    AddAddressComponent,
    AddImageComponent,
    EditProfileComponent,
    SingleUserComponent,
    AddProductComponent,
    AddCatComponent,
    AddBrandComponent,
    AddSizesComponent,
    EditProductComponent,
    AddColorsComponent,
    AddPImagesComponent,
    AddReviewComponent,
    Err404Component,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UserInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
