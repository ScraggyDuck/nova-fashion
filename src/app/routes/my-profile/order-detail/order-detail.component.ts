import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { LocalService } from "src/app/services/local.service";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-order-detail",
  templateUrl: "./order-detail.component.html",
  styleUrls: ["./order-detail.component.scss"]
})
export class OrderDetailComponent implements OnInit {
  subscription: Subscription;
  order: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private localService: LocalService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.getOderDetail();
  }

  getOderDetail() {
    const orderId = this.activatedRoute.snapshot.params["id"];
    const { token } = this.localService.getItem("user");
    this.subscription = this.orderService
      .getOrderById(token, orderId)
      .subscribe(
        data => (this.order = data),
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
