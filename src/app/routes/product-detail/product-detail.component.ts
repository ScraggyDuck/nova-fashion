import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"]
})
export class ProductDetailComponent implements OnInit {
  subscription: Subscription;
  product: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this._getProductDetail();
  }

  _getProductDetail() {
    const productId = this.activatedRoute.snapshot.params["id"];
    this.subscription = this.productService.getProductById(productId).subscribe(
      data => (this.product = data),
      err => this.productService.handleError(err)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
