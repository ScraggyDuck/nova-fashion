import { ClientComponent } from "./client.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/guards/auth.guard";

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
          "../../routes/my-profile/my-profile.module#MyProfileModule",
        canActivate: [AuthGuard]
      },
      {
        path: "contact",
        loadChildren: "../../routes/contact/contact.module#ContactModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
