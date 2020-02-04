import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategorySidebarComponent } from "./category-sidebar.component";
import { FilterComponent } from './filter/filter.component';
import { NewProductsComponent } from './new-products/new-products.component';

@NgModule({
  declarations: [CategorySidebarComponent, FilterComponent, NewProductsComponent],
  imports: [CommonModule],
  exports: [CategorySidebarComponent]
})
export class CategorySidebarModule {}
