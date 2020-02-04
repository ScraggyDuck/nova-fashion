import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoryResultComponent } from "./category-result.component";
import { ProductCardModule } from "../product-card/product-card.module";

@NgModule({
  declarations: [CategoryResultComponent],
  imports: [CommonModule, ProductCardModule],
  exports: [CategoryResultComponent]
})
export class CategoryResultModule {}
