import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddtocardComponent } from './pages/addtocard/addtocard.component';

import { AdminComponent } from './dashboard/admin/admin.component';
import { SupplierComponent } from './dashboard/supplier/supplier.component';
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
import { IsLoggedGuard } from './guards/is-logged.guard';
import { IsnotloggedGuard } from './guards/isnotlogged.guard';
import { Err404Component } from './pages/err404/err404.component';
import { ShowcardComponent } from './pages/showcard/showcard.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "user", children: [

      { path: "register", component: RegisterComponent, canActivate: [IsLoggedGuard] },
      { path: "login", component: LoginComponent, canActivate: [IsLoggedGuard] },

      { path: "addAddress", component: AddAddressComponent, canActivate: [IsnotloggedGuard] },
      { path: "addImage", component: AddImageComponent, canActivate: [IsnotloggedGuard] },

      { path: "profile", component: MyprofileComponent, canActivate: [IsnotloggedGuard] },

      { path: "editProfile", component: EditProfileComponent, canActivate: [IsnotloggedGuard] },

      { path: "sendMessage", component: ContactComponent, canActivate: [IsnotloggedGuard] },
      { path: "allUsers", component: AdminComponent, canActivate: [IsnotloggedGuard] },
      { path: "allUsers/:id", component: SingleUserComponent, canActivate: [IsnotloggedGuard] },
      { path: "logOut", component: LoginComponent, canActivate: [IsnotloggedGuard] }
    ]
  },
  //ha3mlha b activateRoute ba3den mn el kashkol
  {
    path: "product", children: [
      { path: "addProduct", component: AddProductComponent, canActivate: [IsnotloggedGuard] },
      { path: "addCat/:id", component: AddCatComponent, canActivate: [IsnotloggedGuard] },
      { path: "addBrand/:id", component: AddBrandComponent, canActivate: [IsnotloggedGuard] },
      { path: "allProduct", component: ProductlistComponent, canActivate: [IsnotloggedGuard] },
      { path: "allProduct/:id", component: ProductdetailsComponent, canActivate: [IsnotloggedGuard] },
      { path: "addSizes/:id", component: AddSizesComponent, canActivate: [IsnotloggedGuard] },
      { path: "editProduct/:id", component: EditProductComponent, canActivate: [IsnotloggedGuard] },
      { path: "addColors/:id", component: AddColorsComponent, canActivate: [IsnotloggedGuard] },
      { path: "addPImages/:id", component: AddPImagesComponent, canActivate: [IsnotloggedGuard] },
      { path: "addReview/:id", component: AddReviewComponent, canActivate: [IsnotloggedGuard] },
      { path: "addedTocard/:id", component: AddtocardComponent, canActivate: [IsnotloggedGuard] }

    ]
  },
  { path: "showcard", component: ShowcardComponent, canActivate: [IsnotloggedGuard] },
  { path: "supplier", component: SupplierComponent, canActivate: [IsnotloggedGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
