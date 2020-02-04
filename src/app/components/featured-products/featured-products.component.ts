import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-featured-products",
  templateUrl: "./featured-products.component.html",
  styleUrls: ["./featured-products.component.scss"]
})
export class FeaturedProductsComponent implements OnInit {
  cates = [
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate1.jpg",
      name: "Men",
      qty: 1
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate2.jpg",
      name: "Women",
      qty: 3
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate3.jpg",
      name: "Stationery",
      qty: 9
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate4.jpg",
      name: "Home Accessories",
      qty: 4
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate5.jpg",
      name: "Bags",
      qty: 11
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate5.jpg",
      name: "Bags",
      qty: 11
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate5.jpg",
      name: "Bags",
      qty: 11
    },
    {
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/themes/at_nova/assets/img/modules/appagebuilder/icon/cate5.jpg",
      name: "Bags",
      qty: 11
    }
  ];
  constructor() {}

  ngOnInit() {}
}
