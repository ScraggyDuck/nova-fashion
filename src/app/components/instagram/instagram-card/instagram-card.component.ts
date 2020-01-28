import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "instagram-card",
  templateUrl: "./instagram-card.component.html",
  styleUrls: ["./instagram-card.component.scss"]
})
export class InstagramCardComponent implements OnInit {
  @Input() img: string;

  constructor() {}

  ngOnInit() {}
}
