import { Injectable } from '@angular/core';
import { Certification } from './certifications';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {
  certificationlist : Certification[]=[
    {
      id: 1,
      title: "Full-Stack Web Development In Django And Flask",
      date: "13/08/2023",
      type:"Professional",
      institution:"Udemy -: Horizon Tech",
      field: "Web Development",
      image:"not yet"
  },
  {
    id: 2,
    title: "Automate With Python",
    date: "Oct. 25, 2023",
    type:"Professional",
    institution:"Udemy",
    field: "Programming",
    image:"not yet"
},
]; 

getAllCertifications() : Certification[]
{
  return this.certificationlist;
};
getCertificationsById(id:number): Certification | undefined
{
  return this.certificationlist.find(certification => certification.id === id )
};
getCertificationsByField(field: string): Certification[]
{
  return this.certificationlist.filter(certifications => certifications.field === field);
}


  constructor() { }
}
