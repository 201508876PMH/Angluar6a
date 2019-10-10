import { Injectable } from '@angular/core';
import { StudentModel } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  STUDENTS: StudentModel[] = [
    { studentNumber: '1', name: 'Peter', grade: '12' },
    { studentNumber: '2', name: 'Oliver', grade: '12' },
    { studentNumber: '3', name: 'Andreas', grade: '9' },
    { studentNumber: '4', name: 'Anton', grade: '2' },
  ]

  getSudents() {
    return this.STUDENTS;
  }

  deleteStudent(studentNumber: string) {
    let i = 0;
    for (let entry of this.STUDENTS) {
      i++;
      if(entry.studentNumber == studentNumber){
        this.STUDENTS.splice(i, 1);
      }
    }
  }

  addStudent(studentNumber: string, name: string, grade: string) {
    var newStudent = { studentNumber, name, grade };
    this.STUDENTS.push(newStudent);
  }

  updateStudents() {

  }
}
