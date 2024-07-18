import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from '@andreagrossetti/ngx-accordion';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavComponent, ModalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BsModalService, CarouselComponent, CarouselModule, FormsModule, AccordionModule]
 
})
export class AppComponent {
  title = 'AngularPortfolio';
}
