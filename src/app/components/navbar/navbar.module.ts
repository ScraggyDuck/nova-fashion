import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { ClientRoutingModule } from "src/app/layouts/client/client.routing";

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, ClientRoutingModule],
  exports: [NavbarComponent]
})
export class NavbarModule {}
