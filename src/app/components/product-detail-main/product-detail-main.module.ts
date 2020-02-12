import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductDetailMainComponent } from "./product-detail-main.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { NgbTabsetModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [ProductDetailMainComponent],
  imports: [CommonModule, CarouselModule, NgbTabsetModule, NgbNavModule],
  exports: [ProductDetailMainComponent]
})
export class ProductDetailMainModule {}
