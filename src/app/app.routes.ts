import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent }
];
