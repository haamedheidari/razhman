import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListComponent } from "./list/list.component";



@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit{
imgBackground='https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/04/2b2a7027ffe06373e488b6e95a1a884c-min.webp'
 currentIndex = 0;
certificates=[
  {
    title:'گواهینامه GOLD',
    imgUrl:'b.png'
  },
   {
    title:'گواهینامه NOVA',
    imgUrl:'d.png'
  },
   {
    title:'گواهینامه ISO 9001',
    imgUrl:'a-1.png'
  },
   {
    title:'گواهینامه ISO 2008',
    imgUrl:'a-1.png'
  },
   {
    title:'گواهینامه USGBC',
    imgUrl:'c.png'
  }
];
items=[...this.certificates];

ngOnInit(){
  // this.startSlideShow()
}

// startSlideShow() {
//     setInterval(() => {
//     let  index =0
//     if(this.currentIndex < this.items.length){
//          this.currentIndex = (this.currentIndex - 1) % this.items.length;
      
//         this.items.push(this.items[index])
//         index++        
//     }
    
//     }, 4000); 
//   }
}
