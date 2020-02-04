import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { BannerCardComponent } from './banner-card/banner-card.component';

@NgModule({
  declarations: [BannerComponent, BannerCardComponent],
  imports: [CommonModule, CarouselModule],
  exports: [BannerComponent]
})
export class BannerModule {}
