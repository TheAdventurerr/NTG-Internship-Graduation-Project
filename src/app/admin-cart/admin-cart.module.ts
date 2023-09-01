import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersCartsComponent } from './components/users-carts/users-carts.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersCartsComponent,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminCartModule { }
