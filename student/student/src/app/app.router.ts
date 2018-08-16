import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EducationComponent } from './education/education.component';

export const routes:Routes=[
    {path:'',component : DetailsComponent},
    {path:'details',component : DetailsComponent},
    {path:'education',component : EducationComponent}
  ];
  