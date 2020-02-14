import { ClientComponent } from "./client.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        loadChildren: "../../routes/home/home.module#HomeModule"
      },

      {
        path: "clothes",
        loadChildren:
          "../../routes/product-category/product-category.module#ProductCategoryModule"
      },
      {
        path: "clothes/:id",
        loadChildren:
          "../../routes/product-detail/product-detail.module#ProductDetailModule"
      },
      {
        path: "profile",
        loadChildren:
          "../../routes/my-profile/my-profile.module#MyProfileModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
