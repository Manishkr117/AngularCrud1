import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-create-employees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
 
  }
  departments:Department[]
    =[
      {id:1,name:'IT'},
      {id:2,name:'HR'},
      {id:3,name:'Finance'},
      {id:4,name:'Help Desk'}

    ];
    previewPhoto=false;
  gender='female';
  isActive=true;
  buttonText='Show Preview';
  // department=2;
  saveEmployee(EmployeeForm: NgForm){
  
    console.log(EmployeeForm.value);

    console.log(EmployeeForm);
  }

  togglePhotoPreview(){
    if(this.previewPhoto)
    {
    this.previewPhoto=false;
    this.buttonText='Show Preview';
    }
    else{
    this.previewPhoto=true;
    this.buttonText='Hide Preview';
    }
  }
}
