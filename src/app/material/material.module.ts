import { NgModule } from "@angular/core";
import {
  MatSliderModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
} from "@angular/material";

const MaterialComponents = [
  MatSliderModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatButtonToggleModule,
  MatSlideToggleModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
