import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../state/auth.service';
import { FlagsService } from '../state/flags.service';
import { NetworkService } from '../state/network.service';

export const adminGuard: CanActivateFn = async (_r, _s) => {
  const [auth, flags, net, router] = [inject(AuthService), inject(FlagsService), inject(NetworkService), inject(Router)];

  if (!flags.adminSection()) return router.parseUrl('/forbidden');
  if (!auth.isAdmin()) return router.parseUrl('/login');

  const ctrl = new AbortController();
  // Note: async simulation, when library will be ready it'll be used a helper with cancellation
  try {
    const ok = await net.slowCheck(600, ctrl.signal);
    return ok ? true : router.parseUrl('/forbidden');
  } catch {
    return router.parseUrl('/forbidden');
  }
};
