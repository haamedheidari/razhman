import { Component } from '@angular/core';
import { ImenuItem } from '../../models/menu-item.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-bottom-header',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './bottom-header.component.html',
  styleUrl: './bottom-header.component.css'
})
export class BottomHeaderComponent {
LOGOURL = 'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/03/logo.png'

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
