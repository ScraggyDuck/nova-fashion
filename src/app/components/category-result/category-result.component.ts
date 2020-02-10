import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-category-result",
  templateUrl: "./category-result.component.html",
  styleUrls: ["./category-result.component.scss"]
})
export class CategoryResultComponent implements OnInit {
  products = [];
  API_Url = "http://localhost:4200/api/product";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    return this.http
      .get(this.API_Url)
      .subscribe((data: any) => (this.products = data));
  }
}
