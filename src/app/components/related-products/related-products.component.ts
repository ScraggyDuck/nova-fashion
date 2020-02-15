import { Component, OnInit, Input } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-related-products",
  templateUrl: "./related-products.component.html",
  styleUrls: ["./related-products.component.scss"]
})
export class RelatedProductsComponent implements OnInit {
  @Input() relatedProducts: any;
  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    lazyLoad: true,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1024: {
        items: 4
      },
      1440: {
        items: 5
      }
    }
  };

  constructor() {}

  ngOnInit() {}
}
