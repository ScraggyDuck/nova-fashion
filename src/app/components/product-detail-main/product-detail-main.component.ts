import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-detail-main",
  templateUrl: "./product-detail-main.component.html",
  styleUrls: ["./product-detail-main.component.scss"]
})
export class ProductDetailMainComponent implements OnInit {
  @Input() product: any;

  constructor() {}

  ngOnInit() {}
}
