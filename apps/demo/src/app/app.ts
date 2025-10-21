import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  imports: [RouterModule, TopbarComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'demo';
}
