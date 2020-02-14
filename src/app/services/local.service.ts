import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LocalService {
  constructor() {}

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    let value = localStorage.getItem(key);
    if (value && value != "undefined") {
      return JSON.parse(value);
    } else {
      return null;
    }
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
