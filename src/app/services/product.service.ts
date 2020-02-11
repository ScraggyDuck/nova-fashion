import { api_url, rq_product } from "./../utils/BaseValue";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<any> {
    return this.http.get(`${api_url}${rq_product}`);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.message}`);
    }
  }
}
