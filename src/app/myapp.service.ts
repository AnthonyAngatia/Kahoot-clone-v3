import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root",
})
export class MyappService {
  game_list: AngularFireList<any>;
  db_root = "/Kahoot-games";

  constructor(private db: AngularFireDatabase) {
    this.game_list = this.db.list(this.db_root);
  }

  public getDatabase() {
    // this.game_list = this.db.list("/Kahoot-games");
    return this.game_list;
  }
  public getGame(key: string) {
    return this.db.list(this.db_root + "/" + key);
  }

  // public deleteGame(key: string){
  //   return this.db.list(this.db_root);
  // }
}
