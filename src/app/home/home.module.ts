import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { UpdateStudentsComponent } from './update-students/update-students.component';

@NgModule({
  declarations: [
    ViewStudentsComponent,
    CreateStudentsComponent,
    UpdateStudentsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewStudentsComponent,
    CreateStudentsComponent,
    UpdateStudentsComponent
  ]
})
export class HomeModule { }
