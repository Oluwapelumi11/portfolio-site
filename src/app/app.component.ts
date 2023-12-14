import { Component,inject } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';
import { CertificationsService } from './certifications.service';
import { Certification } from './certifications';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-site';
  projectService: ProjectsService = inject(ProjectsService);
  certificationservice: CertificationsService = inject(CertificationsService);



  certifications: Certification[] = [];
  tabProject : Project[]= [];
  


  category: string = "all";
  

  selectedTab(name: string){
    if (name !== 'all'){
    this.tabProject = this.projectService.getProjectByCategory(name);
  }else{
      this.tabProject = this.projectService.getAllProjectsList();
  }
}
  selectedField( name: string){
    if ( name === "all"){
      this.certifications = this.certificationservice.getAllCertifications();
    }else{
      this.certifications = this.certificationservice.getCertificationsByField(name);
    }
  }
  scrollTo(divId : string){
    const section = document.getElementById(divId);

    if (section){
      section.scrollIntoView({behavior: 'smooth'})
    }
  }

    constructor ()  {
      this.tabProject = this.projectService.getAllProjectsList();
      this.certifications = this.certificationservice.getAllCertifications();

    

}
};

