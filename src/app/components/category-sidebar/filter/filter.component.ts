import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "sidebar-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  @Input() filter: any;
  @Output() onFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onChangeFilter(item) {
    item.isSelected = !item.isSelected;
    this.onFilter.emit();
  }
}
