import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({ template: `<h1>🔑 Login</h1><button (click)="go()">Login User</button>` })
export class LoginComponent { private authService=/*inject(AuthService)*/ null; private router=inject(Router); go(){ /*this.authService.login('user');*/ this.router.navigateByUrl('/'); } }
