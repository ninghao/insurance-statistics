import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XueShengComponent } from './xuesheng.component';
import { XueShengRoutingModule } from './xuesheng-routing.module';
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
  declarations: [XueShengComponent],
  imports: [
    CommonModule,
    XueShengRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    FormsModule,
  ],
})
export class XueShengModule {}
