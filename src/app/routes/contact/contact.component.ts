import { Subscription } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ContactService } from "src/app/services/contact.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  email: string = "";
  message: string = "";

  subscription: Subscription;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit() {}

  onSend() {
    this.subscription = this.contactService
      .send(this.email, this.message)
      .subscribe(
        data => {
          this.router.navigate(["/"]);
          console.log(data);
        },
        err => console.log(err)
      );
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }
}
