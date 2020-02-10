import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RelatedProductsComponent } from "./related-products.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ProductCardModule } from "../product-card/product-card.module";

@NgModule({
  declarations: [RelatedProductsComponent],
  imports: [CommonModule, CarouselModule, ProductCardModule],
  exports: [RelatedProductsComponent]
})
export class RelatedProductsModule {}
