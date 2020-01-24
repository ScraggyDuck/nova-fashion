import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner.component";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, CarouselModule],
  exports: [BannerComponent]
})
export class BannerModule {}
