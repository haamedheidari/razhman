import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
LOGOURL = 'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/03/logo.png';
PHONENUMBER={
  url:'tel:+982133526287',
  title:'021-33526254'
};
EMAIL = {url:'mailto : example@gmail.com',
  title:'example@gmail.com'
};
TIMEOFFICE={
title : 'شنبه تا پنجشنبه /8:00-16:00'
}

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
