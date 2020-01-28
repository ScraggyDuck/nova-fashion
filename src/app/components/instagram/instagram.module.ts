import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InstagramComponent } from "./instagram.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { InstagramCardComponent } from './instagram-card/instagram-card.component';

@NgModule({
  declarations: [InstagramComponent, InstagramCardComponent],
  imports: [CommonModule, CarouselModule],
  exports: [InstagramComponent]
})
export class InstagramModule {}
