import { MyProfileComponent } from "./my-profile.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { InformationComponent } from "./information/information.component";

const routes: Routes = [
  {
    path: "",
    component: MyProfileComponent,
    children: [
      {
        path: "",
        component: MainComponent
      },
      {
        path: "information",
        component: InformationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileyRoutingModule {}
