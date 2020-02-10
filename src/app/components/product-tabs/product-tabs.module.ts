import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductTabsComponent } from "./product-tabs.component";

@NgModule({
  declarations: [ProductTabsComponent],
  imports: [CommonModule],
  exports: [ProductTabsComponent]
})
export class ProductTabsModule {}
