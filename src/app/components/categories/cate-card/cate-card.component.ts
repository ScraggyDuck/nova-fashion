import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cate-card",
  templateUrl: "./cate-card.component.html",
  styleUrls: ["./cate-card.component.scss"]
})
export class CateCardComponent implements OnInit {
  @Input() cate: any;
  constructor() {}

  ngOnInit() {}
}
