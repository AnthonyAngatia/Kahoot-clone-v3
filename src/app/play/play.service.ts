import { Injectable } from "@angular/core";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";

@Injectable({
  providedIn: "root",
})
export class PlayService {
  game_list: AngularFireList<any>;
  db_root = "/Kahoot-games";

  constructor(private db: AngularFireDatabase) {
    this.game_list = this.db.list(this.db_root);
  }

  public generateRefId(): number {
    return Math.floor(Math.random() * (100000 - 1) + 1);
  }

  public updateRefId(id: string, value: number) {
    this.game_list.update(id, {
      ref_id: value,
    });
  }
}
