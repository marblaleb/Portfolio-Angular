import { Component, Input, TemplateRef } from '@angular/core';
import { Project } from '../models/Project';
import { BsModalRef, BsModalService, ModalModule, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { ProjectsServiceService } from '../services/projects-service.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent, CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ProjectModalComponent, ModalModule, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
  // providers: [BsModalService, CarouselComponent, CarouselModule]
})
export class ProjectCardComponent {


  @Input() project = {} as Project;

  projects: Project[]=[];
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private ProjectService: ProjectsServiceService){

  }

  ngOnInit(): void {
    this.projects=this.ProjectService.GetProjects();
  }

  


  OpenProjectModal(){

    const modalOptions: ModalOptions={
      class: "modal-lg",
      initialState: {
        project: this.project

      }
    };

    this.bsModalRef=this.modalService.show(ProjectModalComponent, modalOptions);
  }


  openModal(viewUserTemplate: TemplateRef<any>, projectId: number) {
    if (projectId) {
      this.ProjectService.GetProjectById(projectId);
      
      this.bsModalRef = this.modalService.show(viewUserTemplate);
    }
  }
  exitModal = (): void => {
    this.bsModalRef?.hide();
  };



}
