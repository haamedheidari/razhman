import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import bootstrap from 'bootstrap';



interface ISlider {
  id:number;
  title:string;
  description:string;
  buttonText:string;
  buttonUrl:string;
  backgroundUrl:string;
  imageUrl:string
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})

export class SliderComponent {


slides:ISlider[]=[
  {
    id:1,
    title:'شرکت ساخت و ساز ساختینو',
    description:'ساخت و ساز فرآیند ساخت یک ساختمان یا زیرساخت است. ساخت و ساز از تولید متفاوت است در آن تولید معمولا شامل تولید انبوه از اقلام مشابه بدون خریدار تعیین شده است',
    buttonText:'مشاوره رایگان',
    buttonUrl:'moshavereh',
    backgroundUrl:'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/04/2b2a7027ffe06373e488b6e95a1a884c-min.webp',
    imageUrl:'smiling-construction-engineer-posing-with-arms-crossed-isolated-grey-background-1.png'
  },
  {
    id:2,
    title:'شرکت  ساختینو',
    description:'ساخت و ساز فرآیند ساخت یک ساختمان یا زیرساخت است. ساخت و ساز از تولید متفاوت است در آن تولید معمولا شامل تولید انبوه از اقلام مشابه بدون خریدار تعیین شده است',
    buttonText:'مشاوره رایگان',
    buttonUrl:'moshavereh',
    backgroundUrl:'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/05/how-are-bridges-built-hero.webp',
    imageUrl:'smiling-construction-engineer-posing-with-arms-crossed-isolated-grey-background-1.png'
  },
   {
    id:3,
    title:'  ساختینو',
    description:'ساخت و ساز فرآیند ساخت یک ساختمان یا زیرساخت است. ساخت و ساز از تولید متفاوت است در آن تولید معمولا شامل تولید انبوه از اقلام مشابه بدون خریدار تعیین شده است',
    buttonText:'مشاوره رایگان',
    buttonUrl:'moshavereh',
    backgroundUrl:'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/05/how-are-bridges-built-hero.webp',
    imageUrl:'smiling-construction-engineer-posing-with-arms-crossed-isolated-grey-background-1.png'
  }, {
    id:4,
    title:'شرکت  ',
    description:'ساخت و ساز فرآیند ساخت یک ساختمان یا زیرساخت است. ساخت و ساز از تولید متفاوت است در آن تولید معمولا شامل تولید انبوه از اقلام مشابه بدون خریدار تعیین شده است',
    buttonText:'مشاوره رایگان',
    buttonUrl:'moshavereh',
    backgroundUrl:'https://sakhtino.vakiljavangp.com/wp-content/uploads/2025/05/how-are-bridges-built-hero.webp',
    imageUrl:'smiling-construction-engineer-posing-with-arms-crossed-isolated-grey-background-1.png'
  }
];

 scroll(event:Event)  {
event.preventDefault()
const {scrollTop} =document.documentElement
    window.scrollBy({
      top: (window.innerHeight - scrollTop ), 
      left: 0,
      behavior: "smooth"
    });
  };
}



 