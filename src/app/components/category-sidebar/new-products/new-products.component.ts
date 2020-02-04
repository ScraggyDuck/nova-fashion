import { Component, OnInit } from "@angular/core";

@Component({
  selector: "sidebar-new-products",
  templateUrl: "./new-products.component.html",
  styleUrls: ["./new-products.component.scss"]
})
export class NewProductsComponent implements OnInit {
  newProducts = [
    {
      id: 0,
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/92-home_default/customizable-mug.jpg",
      name: "Crewneck Blouse",
      price: 13.9,
      rating: 1
    },
    {
      id: 1,
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/88-home_default/mountain-fox-notebook.jpg",
      name: "Navy Blue Bag",
      price: 12.9,
      rating: 2
    },
    {
      id: 2,
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/85-home_default/mountain-fox-notebook.jpg",
      name: "Leather Backpack",
      price: 12.9,
      rating: 3
    },
    {
      id: 3,
      imgLink:
        "https://demotheme.site/prestashop/at_nova_demo/81-home_default/mountain-fox-notebook.jpg",
      name: "Settlement backpack",
      price: 13.9,
      rating: 1
    }
  ];
  constructor() {}

  ngOnInit() {}
}
