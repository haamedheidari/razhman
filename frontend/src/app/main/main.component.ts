import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";
import { ServicesComponent } from "./services/services.component";
import { CertificateComponent } from "./certificate/certificate.component";
import { ItemDisComponent } from "./item-dis/item-dis.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamMembersComponent } from "./team-members/team-members.component";
import { WeblogComponent } from "./weblog/weblog.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SliderComponent, ServicesComponent, CertificateComponent, ItemDisComponent, ProjectsComponent, TeamMembersComponent, WeblogComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {


}