import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorsComponent } from './doctors/doctors.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent}, 
    {path:'doctors', component:DoctorsComponent},   
    {path:'', redirectTo:'home', pathMatch:'full'}
];
