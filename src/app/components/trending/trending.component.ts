import { Component, OnInit, Input } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-trending",
  templateUrl: "./trending.component.html",
  styleUrls: ["./trending.component.scss"]
})
export class TrendingComponent implements OnInit {
  @Input() products: any;

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
      }
    }
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    const dateNow = new Date();

    if (this.products) {
      this.products = this.products.filter(item => {
        const createdAt = new Date(item.createdAt);
        return createdAt.getMonth() === dateNow.getMonth();
      });
    }
    // console.log(this.products);
  }
}
