import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/Project';
import { ProjectsServiceService } from '../services/projects-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  featuredProject= {} as Project;

  constructor(private titleService: Title, private ProjectService: ProjectsServiceService){
    this.titleService.setTitle("Marco A. Blanco - Home")
  }
  ngOnInit(): void {
    this.featuredProject = this.ProjectService.GetProjectById(0);
  }
}
