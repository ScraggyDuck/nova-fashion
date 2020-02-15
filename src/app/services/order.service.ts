import { rq_order, api_url } from "./../utils/BaseValue";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(token: string): Observable<any> {
    return this.http.get(`${api_url}${rq_order}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    });
  }

  getOrderById(token: string, orderId: string): Observable<any> {
    return this.http.get(`${api_url}${rq_order}/${orderId}`, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "bearer " + token
      })
    });
  }
}
