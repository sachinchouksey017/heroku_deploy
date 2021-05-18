import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertionComponent } from '../convertion.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ConvertionComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule
  ],
  exports:[
    ConvertionComponent
  ]
})
export class ConvertionModule { }
