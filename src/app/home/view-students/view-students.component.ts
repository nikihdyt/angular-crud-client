import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {
  students: Student[] = [];
     
  constructor(public studentService: StudentService) { }
     
  ngOnInit(): void {
    this.studentService.getAll().subscribe((response: any)=>{
      this.students = response.data;
      console.log(this.students);
    })  
  }

  deleteStudent(id:string){
    this.studentService.delete(id).subscribe(res => {
         this.students = this.students.filter(item => item.nim !== id);
         console.log('Student has been deleted successfully!');
    })
  }

}
