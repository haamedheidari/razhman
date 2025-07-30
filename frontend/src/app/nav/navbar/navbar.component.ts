import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
LOGOURL = 'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/03/logo.png';
PHONENUMBER='tel:+982133526287';
EMAIL = 'mailto : example@gmail.com';

apps=[
  {
    Url:'#',
  classIcon : 'bi-instagram'
  },
    {
    Url:'#',
  classIcon : 'bi-instagram'
  },
    {
    Url:'#',
  classIcon : 'bi-instagram'
  }
]
}
