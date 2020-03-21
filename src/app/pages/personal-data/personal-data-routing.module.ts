import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalDataPage } from './personal-data.page';

const routes: Routes = [
    {
        path: '',
        component: PersonalDataPage,
        children: [
            {
                path: 'info',
                loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
            },
            {
                path: 'verify',
                loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
            },
            {
                path: 'questions',
                loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule)
            },
            {
                path: 'health-status',
                loadChildren: () => import('./health-status/health-status.module').then( m => m.HealthStatusPageModule)
            },
            {
                path: '',
                redirectTo: '/personal-data/info',
                pathMatch: 'full'
            },
        ]
    },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },
  {
    path: 'health-status',
    loadChildren: () => import('./health-status/health-status.module').then( m => m.HealthStatusPageModule)
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PersonalDataPageRoutingModule {}
