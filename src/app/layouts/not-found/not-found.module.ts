import { NotFoundRoutingModule } from "./not-found.routing";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule],
  exports: [NotFoundComponent]
})
export class NotFoundModule {}
