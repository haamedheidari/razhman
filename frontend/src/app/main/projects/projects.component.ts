import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
   items:any[]=[];
  currentIndex = 0;
index=0;
interval:any;
projects=[
  {
    id:1,
    title:'mmmmm',
    discription:'fvkmvkmvkmevkkmemkerm',
    category:'vvvvvv',
    rating:'wwwws'
  },
   {
    id:1,
    title:'nnnn',
    discription:'fvkmvkmvkmevkkmemkerm',
    category:'vvvvvv',
    rating:'wwwws'
  },
   {
    id:1,
    title:'ssss',
    discription:'fvkmvkmvkmevkkmemkerm',
    category:'vvvvvv',
    rating:'wwwws'
  },
   {
    id:1,
    title:'wwww',
    discription:'fvkmvkmvkmevkkmemkerm',
    category:'vvvvvv',
    rating:'wwwws'
  },
   {
    id:1,
    title:'mmmmmlll',
    discription:'fvkmvkmvkmevkkmemkerm',
    category:'vvvvvv',
    rating:'wwwws'
  }
];

ngOnInit(){
  
      this.items=[...this.projects]
  
  this.startSlideShow()
}
 
 

  startSlideShow() {
  this.interval=  setInterval(() => {
    if(this.currentIndex < this.projects.length){
         this.currentIndex = (this.currentIndex - 1) % this.items.length;
      
        this.items.push(this.items[this.index])
        this.index++        
    }
    
    }, 4000); 
  }
  ngOnDestroy(){
    clearInterval(this.interval)
   this.items = []
  }


}
