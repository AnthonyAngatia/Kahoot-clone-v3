import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { CreatorComponent } from "./creator/creator.component";
import { FormsModule } from "@angular/forms";
import { MygamesComponent } from './mygames/mygames.component';
// import { MatSliderModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, CreatorComponent, MygamesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
