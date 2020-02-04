import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LookbookComponent } from "./lookbook.component";

@NgModule({
  declarations: [LookbookComponent],
  imports: [CommonModule],
  exports: [LookbookComponent]
})
export class LookbookModule {}
