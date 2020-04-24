import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase";
// import * as firebase from "firebase";

@Injectable({
  providedIn: "root",
})
export class CreatorService {
  games_list: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  public getGames() {
    //!Work from here
    this.games_list = this.db.list("/kahoot-games");
    return this.games_list;
    // this.games_list.snapshotChanges().subscribe((val) => {
    //   val.map((x) => {
    //     console.log(x);
    //   });
    // });
  }
  public addGame(value) {
    firebase.database().ref("Kahoot-games").push({
      title: value.title,
      quiz_questions: value.quiz_questions,
    });
  }
}
