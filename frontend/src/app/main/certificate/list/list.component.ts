import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
interface Icertificate{
  title:string;
  imgUrl:string
}
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit,OnDestroy {
 currentIndex = 0;
 interval:any;
certificates:Icertificate[]=[
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
items:Icertificate[]=[...this.certificates];

ngOnInit(){
   this.startSlideShow()
}
index=0;
startSlideShow() {
  this.interval=  setInterval(() => {
    if(this.currentIndex < this.items.length){
         this.currentIndex = (this.currentIndex - 1) % this.items.length;
      
        this.items.push(this.items[this.index])
        this.index++        
    }
    
    }, 4000); 
  }
  ngOnDestroy(){
    clearInterval(this.interval)
    this.items=this.certificates
  }
}
