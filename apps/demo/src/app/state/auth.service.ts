import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _loggedIn = signal(false);
  private _role = signal<'user' | 'admin' | null>(null);

  isLoggedIn = this._loggedIn.asReadonly();
  role = this._role.asReadonly();
  isAdmin = computed(() => this._loggedIn() && this._role() === 'admin');

  login(role: 'user' | 'admin' = 'user') { this._loggedIn.set(true); this._role.set(role); }
  logout() { this._loggedIn.set(false); this._role.set(null); }
  setRole(role: 'user' | 'admin') { if (this._loggedIn()) this._role.set(role); }
}
