import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrendingComponent } from "./trending.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ProductCardModule } from "../product-card/product-card.module";

@NgModule({
  declarations: [TrendingComponent],
  imports: [CommonModule, CarouselModule, ProductCardModule],
  exports: [TrendingComponent]
})
export class TrendingModule {}
