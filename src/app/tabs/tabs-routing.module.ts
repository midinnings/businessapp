import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { DashboardPage } from '../Menu/dashboard/dashboard.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [{
      path: '',
      redirectTo: '/app/tabs/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          component: DashboardPage,
        },
        {
          path: 'session/:sessionId',
          loadChildren: () => import('../Menu/dashboard/dashboard.module').then(m => m.DashboardPageModule)
        }
      ]
    },
    {
      path: 'checkout',
      children: [
        {
          path: '',
          loadChildren: () => import('../Menu/checkout/checkout.module').then(m => m.CheckoutPageModule)
        },
      ]
    },
    {
      path: 'job',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../Menu/jobs/jobs.module').then(m => m.JobsPageModule)
        }
      ]
    },
    {
      path: 'employer',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../Menu/employer/employer.module').then(m => m.EmployerPageModule)
        }
      ]
    },
    {
      path: 'profile',
      children: [
        {
          path: '',
          loadChildren: () =>
            import('../Menu/profile/profile.module').then(m => m.ProfilePageModule)
        }
      ]
    },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
