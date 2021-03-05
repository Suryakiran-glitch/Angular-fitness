import { TrainingComponent } from './components/training/training.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    component :WelcomeComponentComponent
  },
  {
    path : 'login',
    component :LoginComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path : 'training',
    component : TrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
