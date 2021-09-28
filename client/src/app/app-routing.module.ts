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


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "user/register", component: RegisterComponent },
  { path: "user/login", component: LoginComponent },

  { path: "user/addAddress", component: AddAddressComponent },
  { path: "user/addImage", component: AddImageComponent },

  { path: "user/profile", component: MyprofileComponent },

  { path: "user/editProfile", component: EditProfileComponent },

  { path: "user/sendMessage", component: ContactComponent },
  { path: "user/allUsers", component: AdminComponent },
  { path: "user/allUsers", component: SingleUserComponent },//ha3mlha b activateRoute ba3den mn el kashkol

  { path: "product/addProduct", component: AddProductComponent },
  { path: "product/addCat", component: AddCatComponent },
  { path: "product/addBrand", component: AddBrandComponent },
  { path: "product/allProduct", component: ProductlistComponent },
  { path: "product/allProduct", component: ProductdetailsComponent },//nafs el kalam zayfo2
  { path: "product/addSizes", component: AddSizesComponent },
  { path: "product/editProduct", component: EditProductComponent },
  { path: "product/addColors", component: AddColorsComponent },
  { path: "product/addPImages", component: AddPImagesComponent },
  { path: "product/addReview", component: AddReviewComponent },
  { path: "product/addedTocard", component: AddtocardComponent },
  { path: "supplier", component: SupplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
