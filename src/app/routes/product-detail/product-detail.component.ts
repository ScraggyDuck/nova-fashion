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
  productSubscription: Subscription;
  relatedProductsSubscription: Subscription;
  product: any;
  relatedProducts: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this._getProductDetail();
    this._getRelatedProducts();
  }

  _getProductDetail() {
    const productId = this.activatedRoute.snapshot.params["id"];
    this.productSubscription = this.productService
      .getProductById(productId)
      .subscribe(
        data => (this.product = data),
        err => this.productService.handleError(err)
      );
  }

  _getRelatedProducts() {
    const productId = this.activatedRoute.snapshot.params["id"];
    this.relatedProductsSubscription = this.productService
      .getRelatedProducts(productId)
      .subscribe(
        data => (this.relatedProducts = data),
        err => this.productService.handleError(err)
      );
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
    this.relatedProductsSubscription.unsubscribe();
  }
}
