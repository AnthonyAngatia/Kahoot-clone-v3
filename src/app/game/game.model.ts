export class Game {
  private id: string;
  private title: string;
  private quiz_questions = [];
  private creator: string; //Later models
  private ref_id: number;

  constructor() {}
  public getId(): string {
    return this.id;
  }
  public setId(value: string) {
    this.id = value;
  }
  public getTitle(): string {
    return this.title;
  }
  public setTitle(value: string) {
    this.title = value;
  }
  public getQuiz_questions() {
    return this.quiz_questions;
  }
  public setQuiz_questions(value) {
    this.quiz_questions;
    this.quiz_questions.push(value);
  }
  public getCreator(): string {
    return this.creator;
  }
  public setCreator(value: string) {
    this.creator = value;
  }
  public getRefId() {
    return this.ref_id;
  }
  public setRefId(value: number) {
    this.ref_id = value;
  }
}
