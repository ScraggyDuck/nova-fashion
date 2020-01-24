import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesComponent } from "./categories.component";
import { CateCardComponent } from './cate-card/cate-card.component';

@NgModule({
  declarations: [CategoriesComponent, CateCardComponent],
  imports: [CommonModule],
  exports: [CategoriesComponent]
})
export class CategoriesModule {}
