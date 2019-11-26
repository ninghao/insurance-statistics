import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YanglaoComponent } from './yanglao.component';
import { YanglaoRoutingModule } from './yanglao-routing.module';
import { NzTableModule, NzDividerModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [YanglaoComponent],
  imports: [CommonModule, YanglaoRoutingModule, NzTableModule, NzDividerModule],
})
export class YanglaoModule {}
