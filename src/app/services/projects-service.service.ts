import { Injectable } from '@angular/core';
import { Tag } from '../models/Tag';
import { Project } from '../models/Project';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsServiceService {

  project: Project[] =
    [

      {
        id: 0,
        name: 'Proyecto Kanban',
        summary: 'Web de kanban interactivo',
        description: '',
        projectLink: '',
        tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
        pictures: ["../../assets/16072022-DSC04527.JPG", "../../assets/01 (494).jpg"]
      },

      {
        id: 1,
        name: 'Proyecto WeMeet',
        summary: 'Web de eventos sociales con Spring y Angular',
        description: '',
        projectLink: '',
        tags: [Tag.SRPING, Tag.ANGULAR],
        pictures: ["../../assets/16072022-DSC04527.JPG"]
      },

      {
        id: 2,
        name: 'Proyecto KORO',
        summary: 'Web de búsqueda de actividades',
        description: '',
        projectLink: '',
        tags: [Tag.JAVASCRIPT],
        pictures: []
      },

      {
        id: 3,
        name: 'Proyecto Tienda Segunda Mano',
        summary: 'Tienda de segundo mano con .NET',
        description: '',
        projectLink: '',
        tags: [Tag.DOTNET, Tag.CS],
        pictures: []
      },



    ]



  constructor() { }



  GetProjects() {

    return this.project;

  }

  GetProjectById(id: number): Project {

    let project = this.project.find(project => project.id === id);


    if (project === undefined) {

      throw new TypeError(" No hay projectos con ese id");
    }

    return project;


  }


  GetProjectsByFilter(filterTags: Tag[]) {

    let filteredProjects: Project[] = [];

    this.project.forEach(function (project) {

    

      let foundAll = true;

      filterTags.forEach(function (filterTag) {

        console.log(filterTag)
        console.log(project.tags)
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project)
      }


    });

    console.log(filteredProjects)

    return filteredProjects;

  }
}

