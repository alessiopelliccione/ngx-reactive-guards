import { Component, signal } from '@angular/core';
@Component({
  template: `
    <h1>👤 Profile</h1>
    <input (input)="dirty.set(true)" placeholder="Type to make form dirty" />
    @if (dirty()) { <p>Form is DIRTY</p> }
  `
})
export class ProfileComponent { dirty = signal(false); }
