import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"]
})
export class BannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    items: 1
  };

  imgs = [
    "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/leoslideshow/home2-slide2.jpg",
    "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/leoslideshow/home2-slide1.jpg"
  ];

  constructor() {}

  ngOnInit() {}
}
