import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.css'
})
export class TeamMembersComponent {
interval:any;
  teamMembers=[
    {
      id:1,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'1c8d49a12e80d9bf96d3b7ede5c68ff0644066d9.png',
      sortOrder:5
    },
      {
      id:2,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'d73567b5ce8ef6693f35455d26572188141630e4.png',
      sortOrder:1
    },
    {
      id:3,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'2a44bbe2321e5d771184ea58d0bd78a4-min.png',
      sortOrder:3
    },
     {
      id:1,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'1c8d49a12e80d9bf96d3b7ede5c68ff0644066d9.png',
      sortOrder:5
    },
      {
      id:2,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'d73567b5ce8ef6693f35455d26572188141630e4.png',
      sortOrder:1
    },
    {
      id:3,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'2a44bbe2321e5d771184ea58d0bd78a4-min.png',
      sortOrder:3
    },
     {
      id:1,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'1c8d49a12e80d9bf96d3b7ede5c68ff0644066d9.png',
      sortOrder:5
    },
      {
      id:2,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'d73567b5ce8ef6693f35455d26572188141630e4.png',
      sortOrder:1
    },
    {
      id:3,
      name:'نام و نام خانوادگی',
      role:'نقش',
      bio:'ینثثنثصنثنثننثصهزهنثصثزنص ثئنثصئنمثص تثید نثنن',
      imageUrl:'2a44bbe2321e5d771184ea58d0bd78a4-min.png',
      sortOrder:3
    },

  ];
  currentIndex = 0;
index=0;
items = [...this.teamMembers]

  ngOnInit(){
      this.startSlideShow()
  }
startSlideShow() {
 this.interval=   setInterval(() => {
    if(this.currentIndex <=this.items.length){
         this.currentIndex = (this.currentIndex - 1) % this.items.length;
      
        this.items.push(this.items[this.index])
        this.index++        
    }
    
    }, 4000); 
  }


  prev(){
    if(this.currentIndex <= this.items.length){
    this.currentIndex = this.currentIndex -1 
    }
  }
  next(){
    if(this.currentIndex <=this.items.length){
    this.currentIndex=this.currentIndex +1
    }
  }
  ngOnDestroy(){
    clearInterval(this.interval)
    this.items = this.teamMembers
  }
}
