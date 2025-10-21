import { Route } from '@angular/router';
import { AdminComponent, HomeComponent, LoginComponent, ProfileComponent, PlaygroundComponent } from './pages';
import { featureAdminMatch, authGuard, adminGuard, dirtyFormGuard } from './guards';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canMatch: [featureAdminMatch],
    canActivate: [authGuard, adminGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canDeactivate: [dirtyFormGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'playground',
    component: PlaygroundComponent,
  }
];
