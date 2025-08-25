import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from "../menu/menu.component";



@Component({
  selector: 'app-bottom-header',
  standalone: true,
  imports: [ CommonModule, MenuComponent],
  templateUrl: './bottom-header.component.html',
  styleUrl: './bottom-header.component.css'
})
export class BottomHeaderComponent {
LOGOURL = 'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/03/logo.png'




}
