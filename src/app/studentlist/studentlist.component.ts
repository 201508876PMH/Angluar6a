import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
 
  constructor(private studenService: StudentService ) { 
  }

  getStudents(){
    this.studenService.getSudents();
  }

  addStudent(studentNumber: string, name: string, grade: string){
    this.studenService.addStudent(studentNumber, name, grade);
  }

  deleteStudent(studentNumber: string){
    this.studenService.deleteStudent(studentNumber);
  }

  ngOnInit() {
  }
}
