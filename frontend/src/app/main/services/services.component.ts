import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
interface Service {
  title: string;
  description: string;
  imgUrl: string | null;
}
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit,OnDestroy {
  mainService:any;
  items:Service[]=[];
  currentIndex = 0;
index=0;
interval:any;
  services:Service[]=[{
    title:'خدمات ما',
    description:'.خدماتی که به شما ارائه میدهیم',
    imgUrl:"Group-11378.svg"
  } ,
{
  title:'مشاوره فنی و مهندسی',
  description:'ارائه راهکارهای تخصصی برای بهینه‌سازی فرآیندهای استخراج و فرآوری مواد معدنی با تیمی از مهندسان مجرب  ',
imgUrl:null
} ,
{
  title:' راه‌اندازی نرم‌افزارهای تخصصی ',
  description:'پیاده‌سازی سیستم‌های نرم‌افزاری مدیریت معدن و صنایع فولاد با پشتیبانی کامل ',
imgUrl:null
},
{
  title:'تأمین و نصب تجهیزات',
  description:'تأمین ابزارآلات و ماشین‌آلات تخصصی معدنی با گارانتی و خدمات پس از فروش ',
imgUrl:null
},
{
  title:'بهینه‌سازی فرآیندها',
  description:'تحلیل و بهبود فرآیندهای تولید و استخراج برای افزایش بهره‌وری و کاهش هزینه‌ها',
imgUrl:null
},
  ]

ngOnInit(){
  this.services.forEach(service => {
    if(service.imgUrl !== null && service.imgUrl !== undefined) {
      this.mainService=service;

      this.services = this.services.filter(s => s.imgUrl !== service.imgUrl);
      this.items=[...this.services]
    }


    
  });
  this.startSlideShow()
}
 
 

  startSlideShow() {
  this.interval=  setInterval(() => {
    if(this.currentIndex < this.services.length){
         this.currentIndex = (this.currentIndex - 1) % this.items.length;
      
        this.items.push(this.items[this.index])
        this.index++        
    }
    
    }, 4000); 
  }
  ngOnDestroy(){
    clearInterval(this.interval)
   this.items = this.services
  }
}
