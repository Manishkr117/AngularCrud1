import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
employees:Employee[]=[
    {
      id:1,
      name:"Manish",
      gender:'M',
      email: "manishkr112@gmail.com",
      phoneNumber:8892291411,
      contactPreferences:'email',
      dataOfBirth:new Date('03/02/1990'),
      department:'R & D',
      isActive:true,
      photoPath:'assets/Bike.jpg'
    },
    {
    id:2,
    name:'Einstein',
    gender:'M',
    email:"einstein@gmail.com",
    phoneNumber:8892291444,
    contactPreferences:'SMS',
    dataOfBirth:new Date('01/01/1900'),
    department:'Heaven',
    isActive:false,
    photoPath:'assets/Q.jpg'
    }
];
  constructor() { }

  ngOnInit() {
  }

}
