import { MaterialFormsModule } from './material-forms/material-forms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialFormsModule
  ],
  exports:[MaterialFormsModule]
})
export class SharedModule { }
