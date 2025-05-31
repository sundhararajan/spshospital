import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctormastersComponent } from './admin/doctormasters/doctormasters.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent}, 
    {path:'doctors', component:DoctorsComponent}, 
    
    {path:'admin/doctormasters', component:DoctormastersComponent},   
    {path:'', redirectTo:'home', pathMatch:'full'}
];
