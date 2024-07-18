
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

import {  provideAnimations } from '@angular/platform-browser/animations';


import { AccordionModule } 
    from 'ngx-bootstrap/accordion'; 

import { FormsModule, ReactiveFormsModule } 
    from '@angular/forms'; 


@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, AccordionModule, FormsModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  providers: [
    provideAnimations(), provideAnimations()
  ]
})
export class ResumeComponent {

  isOpen=false;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle("Marco A. Blanco - Home")
  }

  DownloadFile(){
    const link =this.renderer.createElement('a');
    link.setAttribute('target', "_blank");
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf');
    link.click();
    link.remove();
  }

}
