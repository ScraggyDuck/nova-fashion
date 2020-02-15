import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { ContactRoutingModule } from "./contact.routing";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, FormsModule],
  exports: [ContactComponent]
})
export class ContactModule {}
