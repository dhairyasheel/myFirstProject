import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestAppRoutingModule } from './test-app-routing.module';
import { ServiceCompComponent } from './service-comp/service-comp.component';

@NgModule({
  imports: [
    CommonModule,
    TestAppRoutingModule
  ],
  declarations: [ServiceCompComponent]
})
export class TestAppModule { }
