import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './login-container/login-container.component';
import { LoginCardComponent } from './login-card/login-card.component';



@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
