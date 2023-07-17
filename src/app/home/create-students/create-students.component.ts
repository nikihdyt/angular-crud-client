import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent  implements OnInit {
  createForm!: FormGroup;

  constructor(
    public studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      nama_depan: new FormControl('', [Validators.required]),
      nama_belakang: new FormControl(),
      id: new FormControl('', Validators.required),
      tanggal_lahir: new FormControl('', Validators.required),
    });
  }
  
  get f(){
    return this.createForm.controls;
  }
     
  submit(){
    console.log(this.createForm.value);
    this.studentService.create(this.createForm.value).subscribe((res:any) => {
         console.log('Student has created successfully!');
         this.router.navigateByUrl('');
    })
  }
   

}
