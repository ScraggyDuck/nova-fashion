import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCardComponent } from "./product-card.component";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [ProductCardComponent],
  imports: [CommonModule, CarouselModule],
  exports: [ProductCardComponent]
})
export class ProductCardModule {}
