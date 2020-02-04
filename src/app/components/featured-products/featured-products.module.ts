import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeaturedProductsComponent } from "./featured-products.component";
import { ProductCardModule } from "../product-card/product-card.module";

@NgModule({
  declarations: [FeaturedProductsComponent],
  imports: [CommonModule, ProductCardModule],
  exports: [FeaturedProductsComponent]
})
export class FeaturedProductsModule {}
