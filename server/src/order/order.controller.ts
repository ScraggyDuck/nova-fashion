import { User } from "./../types/user.interface";
import { Controller, Get, UseGuards, Post, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "../auth/getUser.decorator";
import { OrderService } from "./order.service";
import { CreateOrderDTO } from "./order.dto";

@Controller("order")
@UseGuards(AuthGuard())
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  listOrders(@GetUser() { _id }: User) {
    return this.orderService.listOrdersByUser(_id);
  }

  @Post()
  createOrder(@Body() order: CreateOrderDTO, @GetUser() { _id }: User) {
    return this.orderService.createOrder(order, _id);
  }
}
