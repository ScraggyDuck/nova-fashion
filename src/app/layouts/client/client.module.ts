import { ClientRoutingModule } from "./client.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientComponent } from "./client.component";
import { NavbarModule } from "src/app/components/navbar/navbar.module";
import { FooterModule } from "src/app/components/footer/footer.module";

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, ClientRoutingModule, NavbarModule, FooterModule],
  exports: [ClientComponent]
})
export class ClientModule {}
