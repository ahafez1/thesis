import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dev1',
    loadChildren: () => import('./dev1/dev1.module').then( m => m.Dev1PageModule)
  },
  {
    path: 'dev2',
    loadChildren: () => import('./dev2/dev2.module').then( m => m.Dev2PageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
