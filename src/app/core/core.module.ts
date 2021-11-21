import { AuthGuardService } from './auth-guard/auth-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
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
    MatDividerModule,
    SharedModule,
    RouterModule.forChild([])
  ],
  exports: [
    LeftMenuComponent,
    TopMenuComponent
  ],
  providers: [AuthGuardService]
})
export class CoreModule { }
