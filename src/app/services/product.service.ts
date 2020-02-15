import { api_url, rq_product, rq_product_related } from "./../utils/BaseValue";
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

  getProductById(id: any): Observable<any> {
    return this.http.get(`${api_url}${rq_product}/${id}`);
  }

  getRelatedProducts(id: any): Observable<any> {
    return this.http.get(`${api_url}${rq_product_related}/${id}`);
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.message}`);
    }
  }
}
