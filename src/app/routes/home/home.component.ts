import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  subcription: Subscription;
  products = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this._getAllProduct();

    // this.productService
    //   .getProductById("5e417e6f037cea088057570c")
    //   .subscribe(data => console.log("params", data));
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
