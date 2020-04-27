import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreatorComponent } from "./creator/creator.component";
import { MygamesComponent } from "./mygames/mygames.component";
import { GameComponent } from "./game/game.component";
import { PlayComponent } from "./play/play.component";

const routes: Routes = [
  { path: "", redirectTo: "/mygames", pathMatch: "full" },
  { path: "creator", component: CreatorComponent },
  { path: "mygames", component: MygamesComponent },
  { path: "mygame/:id", component: GameComponent },
  { path: "mygame/:id/play", component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
