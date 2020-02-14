import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { LocalService } from "src/app/services/local.service";

@Component({
  selector: "app-information",
  templateUrl: "./information.component.html",
  styleUrls: ["./information.component.scss"]
})
export class InformationComponent implements OnInit {
  user: any;

  constructor(private localService: LocalService) {}

  ngOnInit() {
    this.user = this.localService.getItem("user");
  }
}
