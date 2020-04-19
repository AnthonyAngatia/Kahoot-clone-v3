import { Component, OnInit } from "@angular/core";
import { MygamesService } from "./mygames.service";
import { Game } from "./game";

@Component({
  selector: "app-mygames",
  templateUrl: "./mygames.component.html",
  styleUrls: ["./mygames.component.css"],
})
export class MygamesComponent implements OnInit {
  game_list: any[];

  constructor(private mygamesService: MygamesService) {}

  ngOnInit() {
    var x = this.mygamesService.getGames();
    x.snapshotChanges().subscribe((item) => {
      // item is an array of games
      this.game_list = [];
      item.forEach((element) => {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.game_list.push(y as Game);
      });
    });
    localStorage.removeItem("game_id");
    sessionStorage.removeItem("game_id");
    localStorage.removeItem("randomize_quiz");
    sessionStorage.removeItem("randomize_quiz");
  }
}
