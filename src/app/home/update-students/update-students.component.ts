import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-update-students',
  templateUrl: './update-students.component.html',
  styleUrls: ['./update-students.component.css']
})
export class UpdateStudentsComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateForm = this.formBuilder.group({
      nama_depan: ['', Validators.required],
      nama_belakang: [''],
      tanggal_lahir: ['', Validators.required]
    });

    
    const id = this.route.snapshot.params['id'];
    this.studentService.getById(id).subscribe((data: any) => {
      console.log(data);
      this.updateForm.patchValue({
        nama_depan: data.data.nama_depan,
        nama_belakang: data.data.nama_belakang,
        tanggal_lahir: data.data.tanggal_lahir
      });
      console.log(this.updateForm.value);
    });

  }

  get f(){
    return this.updateForm.controls;
  }

  submit(): void {
    if (this.updateForm.invalid) {
      return;
    }

    console.log(this.updateForm.value);
    this.studentService.update(this.route.snapshot.params['id'], this.updateForm.value).subscribe(() => {
      console.log('Student has been updated successfully!');
      this.router.navigateByUrl('');
    });
  }
}
function nullIfEmptyValidator(): any {
  throw new Error('Function not implemented.');
}

