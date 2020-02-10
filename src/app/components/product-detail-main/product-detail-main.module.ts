import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailMainComponent } from "./product-detail-main.component";

@NgModule({
  declarations: [ProductDetailMainComponent],
  imports: [CommonModule],
  exports: [ProductDetailMainComponent]
})
export class ProductDetailMainModule {}
