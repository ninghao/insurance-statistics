import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YibaoComponent } from './yibao.component';
import { YibaoRoutingModule } from './yibao-routing.module';
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
  declarations: [YibaoComponent],
  imports: [
    CommonModule,
    YibaoRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzDropDownModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    FormsModule,
  ],
})
export class YibaoModule {}
