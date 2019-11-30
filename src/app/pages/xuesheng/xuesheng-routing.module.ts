import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XueShengComponent } from './xuesheng.component';

const routes: Routes = [{ path: '', component: XueShengComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XueShengRoutingModule {}
