import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  readonly baseUrl = "https://github.com/oluwapelumi11"

  projectlist: Project[] = [{
    id: '1',
    name: 'Portfolio Site',
    description: 'My very own Portfolio Site made with Angular and Tailwindcss',
    url: `${this.baseUrl}/portfolio-site`,
    photo: '/assets/img/port.png',
    category : "Angular"
},{
    id: '2',
    name: 'School Management App',
    description: 'A School Management app made with Django',
    url: `${this.baseUrl}/school-app`,
    photo: '/assets/img/faith.jpg',
    category : "Django"
},{
    id: '5',
    name: 'URL Shortener',
    description: 'A URL Shortener made with HTML5, Tailwindcss and Flask',
    url: `${this.baseUrl}/url_shortner`,
    photo: '/assets/img/faith.jpg',
    category : "Flask"
},{
    id: '3',
    name: 'File Server',
    description: 'A file server made with HTML5, Tailwindcss and Flask',
    url: `${this.baseUrl}/url-shortner`,
    photo: '/assets/img/faith.jpg',
    category : "Flask"
},{
    id: '9',
    name: 'Funny Quotes API',
    description: 'A Qoutes APi made with HTML5, Tailwindcss and Flask',
    url: `${this.baseUrl}/Funny-api`,
    photo: '/assets/img/faith.jpg',
    category : "Flask"
},{
    id: '6',
    name: 'Proxy Server',
    description: 'A Proxy Server made with HTML5, Tailwindcss and Flask',
    url: `${this.baseUrl}/Proxy-server`,
    photo: '/assets/img/faith.jpg',
    category : "Flask"
},
];

getAllProjectsList (): Project[] {
  return this.projectlist
}

getProjectById(id : string): Project | undefined {
  return this.projectlist.find(Project => Project.id === id);
}
getProjectByCategory(category: string ): Project[] {
  return this.projectlist.filter(Project => Project.category === category)
}

  constructor() { }
}
