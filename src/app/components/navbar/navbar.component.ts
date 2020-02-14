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
  }

  onHoverBoxUser() {
    this._isLogged();
  }

  onLogin() {
    this.subscription = this.userService
      .login({ username: "Quocvietcoi4", password: "A123bb98" })
      .subscribe(
        user => {
          console.log(user);
          this.localService.setItem("user", user);
          this.isLogged = true;
          this.openBoxUser = false;
        },
        err => console.log(err)
      );
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
