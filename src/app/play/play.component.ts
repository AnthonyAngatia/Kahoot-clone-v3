import { Component, OnInit } from "@angular/core";
import { PlayService } from "./play.service";
import { ActivatedRoute } from "@angular/router";
import { Game } from "../game/game.model";
import { MyappService } from "../myapp.service";
import { GameComponent } from "../game/game.component";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.css"],
})
export class PlayComponent implements OnInit {
  game = new Game(); //!Instantiating a game object twice nnedst o be looked on
  ref_id: number;
  quiz_questions: any[];
  isChecked: boolean;
  player_list: any[];
  constructor(
    private playService: PlayService,
    private route: ActivatedRoute,
    private myAppService: MyappService
  ) {}

  ngOnInit() {
    const id = Object.values(this.route.snapshot.params).toString();
    console.log(id);
    this.ref_id = this.playService.generateRefId();
    this.game.setRefId(this.ref_id);
    this.playService.updateRefId(id, this.ref_id);
    this.getGame(id); //!Repetitive
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
          if (element.key == "team_name") {
            const name_object = element.payload.toJSON();
            var name_arr = Object.values(name_object); //conver the object to an array
            this.player_list = [];
            name_arr.forEach((name_obj) => {
              console.log("At tem names");
              console.log(name_obj);
              // console.log(name_obj.name);
              // this.player_list.push(name_obj.name);
            });
          }
        });
      });
  }

  public onChange(state: any) {
    console.log(state);
    sessionStorage.setItem("randomize_quiz", state);
  }
}
