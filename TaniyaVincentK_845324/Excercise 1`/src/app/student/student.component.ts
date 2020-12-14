import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public students = [  
    {"id" : 1001, "name" : "Taniya", "marks" : 30},  
    {"id" : 1002, "name" : "Anaya", "marks" : 50},  
    {"id" : 1003, "name" : "Appu", "marks" : 80},  
    ];  
  

}
