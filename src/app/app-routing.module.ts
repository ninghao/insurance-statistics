import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/yanglao' },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
  },
  {
    path: 'yanglao',
    loadChildren: () =>
      import('./pages/yanglao/yanglao.module').then(m => m.YanglaoModule),
  },
  {
    path: 'yibao',
    loadChildren: () =>
      import('./pages/yibao/yibao.module').then(m => m.YibaoModule),
  },
  {
    path: 'xuesheng',
    loadChildren: () =>
      import('./pages/xuesheng/xuesheng.module').then(m => m.XueShengModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
