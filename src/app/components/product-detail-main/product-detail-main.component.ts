import { Component, OnInit, Input } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-product-detail-main",
  templateUrl: "./product-detail-main.component.html",
  styleUrls: ["./product-detail-main.component.scss"]
})
export class ProductDetailMainComponent implements OnInit {
  @Input() product: any;

  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    lazyLoad: true,
    margin: 20,
    responsive: {
      0: {
        items: 4
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
