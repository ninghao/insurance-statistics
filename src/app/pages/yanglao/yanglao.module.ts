import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YanglaoComponent } from './yanglao.component';
import { YanglaoRoutingModule } from './yanglao-routing.module';
import {
  NzTableModule,
  NzDividerModule,
  NzDropDownModule,
  NzInputModule,
  NZ_ICONS,
  NzButtonModule,
  NzIconModule,
} from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [YanglaoComponent],
  imports: [
    CommonModule,
    YanglaoRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    FormsModule,
  ],
})
export class YanglaoModule {}
