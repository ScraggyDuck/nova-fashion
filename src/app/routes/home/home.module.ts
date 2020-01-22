import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { BannerModule } from "src/app/components/banner/banner.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, BannerModule],
  exports: [HomeComponent]
})
export class HomeModule {}
