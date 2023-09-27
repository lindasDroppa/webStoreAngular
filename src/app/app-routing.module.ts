import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorComponent } from './error/error.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProductComponent } from './user-product/user-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
{
  path:`home`,
  component:HomePageComponent
},
{
  path:'home/login',
  component:LoginComponent
},
{
  path:`error`,
  component:ErrorComponent
},
{
  path:`home/user/dashboard`,
  component:UserDashboardComponent
},{
  path:`home/user/product`,
  component:UserProductComponent
},{
  path:`test/:productId`,
  component:ViewProductComponent
},{
  path:`home/cart`,
  component:CartComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
