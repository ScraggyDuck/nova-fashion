import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductCategoryComponent } from "./product-category.component";
import { ProductCategoryRoutingModule } from "./product-category.routing";
import { CategoryResultModule } from "src/app/components/category-result/category-result.module";
import { CategorySidebarModule } from "src/app/components/category-sidebar/category-sidebar.module";

@NgModule({
  declarations: [ProductCategoryComponent],
  imports: [
    CommonModule,
    ProductCategoryRoutingModule,
    CategoryResultModule,
    CategorySidebarModule
  ],
  exports: [ProductCategoryComponent]
})
export class ProductCategoryModule {}
