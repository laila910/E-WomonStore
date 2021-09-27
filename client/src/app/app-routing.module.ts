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
import { LogOutComponent } from './pages/log-out/log-out.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "log-out", component: LogOutComponent },
  { path: "profile", component: MyprofileComponent },
  { path: "productlist", component: ProductlistComponent },
  { path: "productdetails", component: ProductdetailsComponent },
  { path: "contact", component: ContactComponent },
  { path: "addtocard", component: AddtocardComponent },

  { path: "admin", component: AdminComponent },
  { path: "supplier", component: SupplierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
