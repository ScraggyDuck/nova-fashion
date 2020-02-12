import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-category-sidebar",
  templateUrl: "./category-sidebar.component.html",
  styleUrls: ["./category-sidebar.component.scss"]
})
export class CategorySidebarComponent implements OnInit {
  @Input() filter: any;
  @Output() onFilterProducts: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  _onFilter() {
    this.onFilterProducts.emit();
  }
}
