import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.scss"]
})
export class ProductCategoryComponent implements OnInit, OnDestroy {
  subcription: Subscription;
  products = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this._getAllProduct();
  }

  _getAllProduct() {
    this.subcription = this.productService.getAllProduct().subscribe(
      data => {
        // console.log(data);
        this.products = data;
      },
      err => this.productService.handleError(err)
    );
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
