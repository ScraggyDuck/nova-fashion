import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-category-result",
  templateUrl: "./category-result.component.html",
  styleUrls: ["./category-result.component.scss"]
})
export class CategoryResultComponent implements OnInit {
  @Input() products: any;

  constructor() {}

  ngOnInit() {}
}
