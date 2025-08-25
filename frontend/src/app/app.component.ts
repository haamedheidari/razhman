import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./nav/top-header/header.component";
import { BottomHeaderComponent } from "./nav/bottom-header/bottom-header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BottomHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'razhman';
  showBtnScrollTop:boolean=false;


scroll(event:Event){
  event.preventDefault()
   const {scrollTop} = document.documentElement;
   if(scrollTop >= 50){
    this.showBtnScrollTop=true
   }
   else{
    this.showBtnScrollTop=false
   }
}

  showBtnScroll(){
   const {scrollTop} = document.documentElement;
   if(scrollTop >= 50){
    this.showBtnScrollTop=true
   }
   else{
    this.showBtnScrollTop=false
   }
  }
}
