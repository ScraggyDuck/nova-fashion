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
  filter = {
    colors: [
      {
        value: "red",
        isSelected: false
      },
      {
        value: "white",
        isSelected: false
      },
      {
        value: "black",
        isSelected: false
      },
      {
        value: "yellow",
        isSelected: false
      },
      {
        value: "green",
        isSelected: false
      },
      {
        value: "blue",
        isSelected: false
      },
      {
        value: "orange",
        isSelected: false
      }
    ],
    sizes: [
      {
        value: "S",
        isSelected: false
      },
      {
        value: "M",
        isSelected: false
      },
      {
        value: "L",
        isSelected: false
      },
      {
        value: "XL",
        isSelected: false
      }
    ],
    availabilitys: [
      {
        name: "In stock",
        value: "1",
        isSelected: false
      },
      {
        name: "Not available",
        value: "0",
        isSelected: false
      }
    ]
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this._getAllProduct();
  }

  _getAllProduct() {
    this.subcription = this.productService.getAllProduct().subscribe(
      data => {
        // Filter color
        this.filter.colors.forEach(color => {
          if (color.isSelected) {
            data = data.filter(product => {
              return product.colors.includes(color.value);
            });
          }
        });
        // Filter size
        this.filter.sizes.forEach(size => {
          if (size.isSelected) {
            data = data.filter(product => {
              return product.sizes.includes(size.value);
            });
          }
        });
        // Filter Avaibility
        if (
          this.filter.availabilitys[0].isSelected &&
          !this.filter.availabilitys[1].isSelected
        ) {
          data = data.filter(product => product.quantity > 0);
        } else if (
          !this.filter.availabilitys[0].isSelected &&
          this.filter.availabilitys[1].isSelected
        ) {
          data = data.filter(product => product.quantity === 0);
        }

        this.products = data;
        // console.log(this.products);
      },
      err => this.productService.handleError(err)
    );
  }

  onFilterProducts() {
    this._getAllProduct();
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe();
  }
}
