import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { LocalService } from "src/app/services/local.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, OnDestroy {
  email: string = "";
  password: string = "";
  isLogged = false;
  openBoxUser = false;

  isLoginFailed = false;

  currentUser: any = {};
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private localService: LocalService
  ) {}

  ngOnInit() {
    this._isLogged();
  }

  _isLogged() {
    this.isLogged = this.userService.isLogged();
    const user = this.localService.getItem("user");
    if (user) {
      this.currentUser = user;
    }
  }

  onHoverBoxUser() {
    this._isLogged();
  }

  onLogin() {
    this.subscription = this.userService
      .login({ email: this.email, password: this.password })
      .subscribe(
        user => {
          this.localService.setItem("user", user);
          this.isLogged = true;
          this.openBoxUser = false;
          this.currentUser = user;
          this.isLoginFailed = false;
          (this.email = ""), (this.password = "");
        },
        err => (this.isLoginFailed = true)
      );
  }

  logout() {
    this.userService.logout();
    this.isLogged = false;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
