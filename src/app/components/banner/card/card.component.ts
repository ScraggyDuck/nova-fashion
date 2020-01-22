import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-banner-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() img: string;

  constructor() {}

  ngOnInit() {}
}
