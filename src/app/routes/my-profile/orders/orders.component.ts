import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { LocalService } from "src/app/services/local.service";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  subscription: Subscription;
  orders: any;

  constructor(
    private localService: LocalService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    const { token } = this.localService.getItem("user");
    this.subscription = this.orderService.getOrders(token).subscribe(
      data => (this.orders = data),
      err => console.log(err)
    );
  }

  orderTotal(order: any) {
    let total = 0;
    if (order) {
      order.products.forEach(item => {
        total += item.quantity * item.product.price;
      });
    }
    return total;
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
