import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BannerComponent } from "./banner.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [BannerComponent, CardComponent],
  imports: [CommonModule, CarouselModule],
  exports: [BannerComponent]
})
export class BannerModule {}
