import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseTypeRoutingModule } from './choose-type-routing.module';
import { ChooseTypeComponent } from '../choose-type.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ChooseTypeComponent
  ],
  imports: [
    CommonModule,
    ChooseTypeRoutingModule,
    FlexLayoutModule
  ],
  exports:[
    ChooseTypeComponent
  ]
})
export class ChooseTypeModule {
  constructor(){
    console.log('ChooseTypeModule component loaded');
    
  }
 }
