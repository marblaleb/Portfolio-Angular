import { Component, OnInit, Type } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { ProjectsServiceService } from '../services/projects-service.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, ModalModule, ProjectCardComponent, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];

  isCollapsed: boolean = false;


  typescript: boolean = false;
  angular: boolean = false;
  spring: boolean = false;
  cs: boolean = false;
  javascript: boolean = false;
  dotnet: boolean = false;
  java: boolean = false;



  constructor(private titleService: Title, private ProjectService: ProjectsServiceService) {
    this.titleService.setTitle("Marco A. Blanco - Home")
  }

  ngOnInit(): void {
    this.projects = this.ProjectService.GetProjects();
  }

  Filter() {

    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT)
    }
    if (this.spring) {
      filterTags.push(Tag.SRPING)
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR)
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT)
    }

    if (this.cs) {
      filterTags.push(Tag.CS)
    }
    if (this.dotnet) {
      filterTags.push(Tag.DOTNET)
    }
    if (this.java) {
      filterTags.push(Tag.JAVA)
    }

    this.projects = this.ProjectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.javascript = false;
    this.cs = false;

    this.typescript= false;
    this.angular= false;
    this.spring = false;

    this.dotnet = false;
    this.java = false;

    this.projects=this.ProjectService.GetProjects();
  }

}
