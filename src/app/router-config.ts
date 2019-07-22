import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { AddOpportunityComponent } from './opportunity/add-opportunity/add-opportunity.component';
import { OpportunityComponent } from './opportunity/opportunity.component';

export  const appRoutes: Routes = [
  { path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'opportunity',
    component: OpportunityComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'add-opportunity',
    component: AddOpportunityComponent
  },
  { path: 'add-profile',
    component: AddProfileComponent
  }
];
