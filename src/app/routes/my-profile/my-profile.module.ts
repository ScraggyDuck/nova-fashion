import { MyProfileyRoutingModule } from "./my-profile.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyProfileComponent } from "./my-profile.component";
import { InformationComponent } from './information/information.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MyProfileComponent, InformationComponent, MainComponent],
  imports: [CommonModule, MyProfileyRoutingModule],
  exports: [MyProfileComponent]
})
export class MyProfileModule {}
