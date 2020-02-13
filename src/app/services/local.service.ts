import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalService {
  constructor() {}

  setItem(value: any) {
    localStorage.setItem("token", JSON.stringify(value));
  }

  getItem() {
    let value = localStorage.getItem("token");
    if (value && value != "undefined") {
      return JSON.parse(value);
    } else {
      return null;
    }
  }

  remove() {
    localStorage.removeItem("token");
  }
}
