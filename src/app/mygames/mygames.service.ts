import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root",
})
export class MygamesService {
  games_list: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {}

  public getGames() {
    this.games_list = this.db.list("/Kahoot-games");
    return this.games_list;
  }
}
