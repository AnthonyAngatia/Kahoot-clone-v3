import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreatorComponent } from "./creator/creator.component";

const routes: Routes = [
  { path: "", redirectTo: "/creator", pathMatch: "full" },
  { path: "creator", component: CreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
