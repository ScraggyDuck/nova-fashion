import { ProductTabsModule } from "./../../components/product-tabs/product-tabs.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailRoutingModule } from "./product-detail.routing";
import { RelatedProductsModule } from "src/app/components/related-products/related-products.module";
import { ProductDetailMainModule } from "src/app/components/product-detail-main/product-detail-main.module";

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    ProductDetailMainModule,
    ProductTabsModule,
    RelatedProductsModule
  ],
  exports: [ProductDetailComponent]
})
export class ProductDetailModule {}
