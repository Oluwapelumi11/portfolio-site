import { Component,Input } from '@angular/core';
import { Project } from '../project';


@Component({
  selector: 'app-recent-angular',
  templateUrl: './recent-angular.component.html',
  styleUrls: ['./recent-angular.component.css']
})
export class RecentAngularComponent {
  @Input() project! : Project;
  


}
