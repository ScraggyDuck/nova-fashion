import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home.routing";
import { BannerModule } from "src/app/components/banner/banner.module";
import { CollectionModule } from "src/app/components/collection/collection.module";
import { CategoriesModule } from "src/app/components/categories/categories.module";
import { InstagramModule } from "src/app/components/instagram/instagram.module";
import { ContactModule } from "src/app/components/contact/contact.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerModule,
    CollectionModule,
    CategoriesModule,
    ContactModule,
    InstagramModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
