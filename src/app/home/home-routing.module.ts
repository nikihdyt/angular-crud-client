import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentsComponent } from './create-students/create-students.component';
import { UpdateStudentsComponent } from './update-students/update-students.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'create', component: CreateStudentsComponent },
  { path:'update/:id', component: UpdateStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
