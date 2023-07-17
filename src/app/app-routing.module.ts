import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStudentsComponent } from './home/view-students/view-students.component';
import { CreateStudentsComponent } from './home/create-students/create-students.component';
import { UpdateStudentsComponent } from './home/update-students/update-students.component';


const routes: Routes = [
  // { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'', component: ViewStudentsComponent},
  { path:'create', component: CreateStudentsComponent },
  { path:'update/:id', component: UpdateStudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
