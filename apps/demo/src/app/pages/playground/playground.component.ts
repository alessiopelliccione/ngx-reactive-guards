import { Component } from '@angular/core';
@Component({ template: `
  <h1>🧪 Playground</h1>
  <ul>
    <li>Try: enter /admin as a guest → redirected to /login</li>
    <li>Try: log in as user → visit /admin → switch role back to user → get kicked out</li>
    <li>Try: disable the adminSection flag → route hidden (CanMatch)</li>
    <li>Try: fill /profile input → navigate away → CanDeactivate blocks</li>
  </ul>
`})
export class PlaygroundComponent {}
