import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MyappService } from "../myapp.service";
import { Game } from "./game.model";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.css"],
})
export class GameComponent implements OnInit {
  game = new Game();
  quiz_questions;
  constructor(
    private route: ActivatedRoute,
    private myAppService: MyappService
  ) {}

  ngOnInit() {
    const id = Object.values(this.route.snapshot.params).toString();
    this.game.setId(id);
    this.getGame(id); //retrieving from the db
  }

  getGame(id: string) {
    this.myAppService
      .getGame(id)
      .snapshotChanges()
      .subscribe((game) => {
        game.forEach((element) => {
          if (element.key == "title") {
            this.game.setTitle(element.payload.toJSON().toString());
          }
          if (element.key == "quiz_questions") {
            console.log(element.payload.val());
            const questions = Object.values(element.payload.val());
            questions.forEach((val) => {
              console.log();
              this.game.setQuiz_questions(val);
            });
            this.quiz_questions = this.game.getQuiz_questions();
          }
        });
      });
  }
}
