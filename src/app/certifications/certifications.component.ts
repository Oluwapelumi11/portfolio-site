import { Component,Input } from '@angular/core';
import { Certification } from '../certifications';


@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {
 @Input() certificate! : Certification;




  constructor(){
  }

}
