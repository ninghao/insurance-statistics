import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YanglaoComponent } from './yanglao.component';

const routes: Routes = [{ path: '', component: YanglaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YanglaoRoutingModule {}
