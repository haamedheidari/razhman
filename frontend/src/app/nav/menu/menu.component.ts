import { Component, Input } from '@angular/core';
import { ImenuItem } from '../../models/menu-item.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
@Input() style : boolean = false;

menuItems:ImenuItem[]=[
  {
    title:'صفحه اصلی',
    url:'home',
    isActive:true
  },
   {
    title:'وبلاگ',
    url:'home',
    isActive:false
  },
   {
    title:'محصولات',
    url:'home',
    isActive:false
  },
   {
    title:'خدمات',
    url:'home',
    isActive:false
  },
]



toggleIsActive(item:ImenuItem){
  this.menuItems.forEach(item => item.isActive=false )
  item.isActive = true
}
}
