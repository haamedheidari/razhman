import { Component } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
