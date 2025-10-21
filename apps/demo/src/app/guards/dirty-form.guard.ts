import { CanDeactivateFn } from '@angular/router';
export type DirtyAware = { dirty: () => boolean };
export const dirtyFormGuard: CanDeactivateFn<DirtyAware> = (_c, _r, _s, _n) =>
  confirm('Unsaved modification, do you want to exit?') || false;
