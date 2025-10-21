import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { FlagsService } from '../state/flags.service';
export const featureAdminMatch: CanMatchFn = () => inject(FlagsService).adminSection();
