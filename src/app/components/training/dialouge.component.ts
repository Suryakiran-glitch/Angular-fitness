import {Component , OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector : 'app-dialouge-component',
  template : `<h1 mat-dialog-title>Are you sure</h1>
  <mat-dialog-content>
  <p>You already completed {{passedData.progress}}%</p>
  </mat-dialog-content>
  <mat-dialog-actions>
  <button mat-button [mat-dialog-close]="true">Yes</button>
  <button mat-button [mat-dialog-close]="false">No</button>
  </mat-dialog-actions>
  `
})


export class dialougeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData : any){}
}
