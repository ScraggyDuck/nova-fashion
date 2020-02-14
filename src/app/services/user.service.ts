import { api_url, rq_user_login } from "./../utils/BaseValue";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LocalService } from "./local.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient, private localStorage: LocalService) {}

  isLogged() {
    const user = this.localStorage.getItem("user");
    if (user) {
      return true;
    }
    return false;
  }

  login(user: any): Observable<any> {
    return this.http.post(`${api_url}${rq_user_login}`, user);
  }

  logout() {
    localStorage.removeItem("user");
  }

  handleError(err) {
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Server-side error: ${err.status} - ${err.message}`);
    }
  }
}
