import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component"; // Home component
import { AboutComponent } from "./about/about.component"; // Home component

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about/:id",
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
