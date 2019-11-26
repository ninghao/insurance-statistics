import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YanglaoComponent } from './yanglao.component';
import { YanglaoRoutingModule } from './yanglao-routing.module';

@NgModule({
  declarations: [YanglaoComponent],
  imports: [CommonModule, YanglaoRoutingModule],
})
export class YanglaoModule {}
