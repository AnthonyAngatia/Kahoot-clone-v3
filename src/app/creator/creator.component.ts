import { Component, OnInit } from "@angular/core";
import { Game } from "../mygames/game";

@Component({
  selector: "app-creator",
  templateUrl: "./creator.component.html",
  styleUrls: ["./creator.component.css"],
})
export class CreatorComponent implements OnInit {
  title: boolean = false;
  game: Game;
  temp_object = {
    question: "Which city is referred to as the 'Green city in the sun'",
    choices: {
      choice1: "Nairobi",
      choice2: "Kampala",
      choice3: "Mombasa",
      choice4: "Kisumu",
    },
  };
  quiz_questions;

  constructor() {}

  ngOnInit() {}
  getTitle(title: string) {
    this.title = true;
    this.game = new Game();
    this.game.setTitle(title);
  }
  onSubmit() {
    // console.log(this.temp_object);
    const temp_obj = this.temp_object;
    const choices = this.formatChoices(temp_obj);
    const game_obj = {
      question: temp_obj.question,
      choices: choices,
    };
    this.game.setQuiz_questions(game_obj);
    this.quiz_questions = this.game.getQuiz_questions();
  }

  saveGame() {
    console.log(this.game);
    //!Send to database
  }

  private formatChoices(temp_obj: {
    question: string;
    choices: {
      choice1: string;
      choice2: string;
      choice3: string;
      choice4: string;
    };
  }) {
    const choices = [];
    choices.push(temp_obj.choices.choice1, temp_obj.choices.choice2);
    if (temp_obj.choices.choice3 != "") {
      choices.push(temp_obj.choices.choice3);
    }
    if (temp_obj.choices.choice4 != "") {
      choices.push(temp_obj.choices.choice4);
    }
    return choices;
  }
}
