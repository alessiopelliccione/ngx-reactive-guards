import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class FlagsService {
  adminSection = signal(true);
  experimentalProfile = signal(false);
}
