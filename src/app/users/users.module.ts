import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FilterByCityPipe } from '../pipes/filter-by-city.pipe';
import { CapitalizeNamePipe } from '../pipes/capitalize-name.pipe';


@NgModule({
  declarations: [
    UsersComponent,
    FilterByCityPipe,
    CapitalizeNamePipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    
  ]
})
export class UsersModule { }
