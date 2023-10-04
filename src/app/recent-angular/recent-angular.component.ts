import { Component } from '@angular/core';
import { Project } from '../types';
import { fakeProjects } from '../fake-data';

@Component({
  selector: 'app-recent-angular',
  templateUrl: './recent-angular.component.html',
  styleUrls: ['./recent-angular.component.css']
})
export class RecentAngularComponent {
  projects : Project [] = [];

  constructor () {}

  ngOnInit (){
    this.projects = fakeProjects;
  }





}
