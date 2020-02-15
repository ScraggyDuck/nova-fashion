import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { api_url, rq_contact_send } from "../utils/BaseValue";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private http: HttpClient) {}

  send(email: string, message: string): Observable<any> {
    return this.http.post(`${api_url}${rq_contact_send}`, { email, message });
  }
}
