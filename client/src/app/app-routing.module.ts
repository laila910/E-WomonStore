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
  {
    path: "user", children: [

      { path: "register", component: RegisterComponent },
      { path: "login", component: LoginComponent },

      { path: "addAddress", component: AddAddressComponent },
      { path: "addImage", component: AddImageComponent },

      { path: "profile", component: MyprofileComponent },

      { path: "editProfile", component: EditProfileComponent },

      { path: "sendMessage", component: ContactComponent },
      { path: "allUsers", component: AdminComponent },
      { path: "allUsers", component: SingleUserComponent }
    ]
  },
  //ha3mlha b activateRoute ba3den mn el kashkol
  {
    path: "product", children: [
      { path: "addProduct", component: AddProductComponent },
      { path: "addCat", component: AddCatComponent },
      { path: "addBrand", component: AddBrandComponent },
      { path: "allProduct", component: ProductlistComponent },
      { path: "allProduct", component: ProductdetailsComponent },//nafs el kalam zayfo2
      { path: "addSizes", component: AddSizesComponent },
      { path: "editProduct", component: EditProductComponent },
      { path: "addColors", component: AddColorsComponent },
      { path: "addPImages", component: AddPImagesComponent },
      { path: "addReview", component: AddReviewComponent },
      { path: "addedTocard", component: AddtocardComponent }

    ]
  },

  { path: "supplier", component: SupplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
