import { MyProfileyRoutingModule } from "./my-profile.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyProfileComponent } from "./my-profile.component";
import { InformationComponent } from './information/information.component';
import { MainComponent } from './main/main.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [MyProfileComponent, InformationComponent, MainComponent, OrdersComponent, OrderDetailComponent],
  imports: [CommonModule, MyProfileyRoutingModule],
  exports: [MyProfileComponent]
})
export class MyProfileModule {}
