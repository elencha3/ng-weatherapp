import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';






@NgModule({
  declarations: [
    LeftMenuComponent,
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule
  ],
  exports: [
    LeftMenuComponent,
    TopMenuComponent
  ]
})
export class CoreModule { }
