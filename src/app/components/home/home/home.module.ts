import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home.component';
import { HeaderModule } from '../../header/header/header.module';
import { ChooseTypeModule } from '../../choose-type/choose-type/choose-type.module';
import { ConvertionModule } from '../../convertion/convertion/convertion.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    ChooseTypeModule,
    ConvertionModule,
    FlexLayoutModule
  ]
})
export class HomeModule { 
  constructor(){
    console.log('home component loaded');
    
  }
}
