import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-featured-products",
  templateUrl: "./featured-products.component.html",
  styleUrls: ["./featured-products.component.scss"]
})
export class FeaturedProductsComponent implements OnInit {
  @Input() products: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.products) {
      this.products = this.products.filter(item => item.isFeatured);
    }
    // console.log(this.products);
  }
}
