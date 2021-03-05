import { CurrentTrainingComponent } from './components/training/current-training/current-training.component'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material.module'
import {FlexLayoutModule} from '@angular/flex-layout'
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrainingComponent } from './components/training/training.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { OldTrainingComponent } from './components/training/old-training/old-training.component';
import {dialougeComponent} from './components/training/dialouge.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    WelcomeComponentComponent,
    NewTrainingComponent,
    OldTrainingComponent,
    CurrentTrainingComponent,
    dialougeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [dialougeComponent]

})
export class AppModule { }
