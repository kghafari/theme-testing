import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TesterComponent } from './modules/tester/tester.component';
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { LeavesComponent } from './modules/leaves/leaves.component';
import { CardComponent } from './modules/card/card.component';

@Component({
  imports: [
    RouterModule,
    TesterComponent,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    LeavesComponent,
    CardComponent,
  ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'theme-testing';

  toggleDarkMode(event: MatSlideToggleChange) {
    document.documentElement.classList.toggle('dark-mode');
  }

  toggleSpringMode(event: MatSlideToggleChange) {
    document.documentElement.classList.toggle('spring-mode');
  }
}
