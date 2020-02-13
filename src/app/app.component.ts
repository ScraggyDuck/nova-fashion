import { Component } from "@angular/core";
import { UserService } from "./services/user.service";
import { LocalService } from "./services/local.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    private userService: UserService,
    private localService: LocalService
  ) {}

  // ngOnInit(): void {
  //   this.userService
  //     .login({ username: "Quocvietcoi4", password: "A123bb98" })
  //     .subscribe(
  //       data => this.localService.setItem(data.accessToken),
  //       err => console.log(err)
  //     );
  // }
}
